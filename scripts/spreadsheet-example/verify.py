"""Recalculate real workbook formulas, independently check totals, and test edits.
Dependencies: openpyxl, formulas. No Excel installation is implied by this test.
"""
from pathlib import Path
from tempfile import TemporaryDirectory
from collections import Counter
from datetime import datetime
import json, formulas, openpyxl
ROOT=Path(__file__).resolve().parents[2]
FILE=ROOT/'public/downloads/eden-spreadsheet-reporting.xlsx'

def oracle(w):
    rows=list(w['Input'].iter_rows(min_row=7,max_row=38,max_col=5,values_only=True))
    ids=Counter(str(r[0]).strip().upper() for r in rows if r[0] is not None)
    status=[]; amounts=[]; channels={'Online':0,'Retail':0}
    for r in rows:
        if all(v is None for v in r):s=''
        elif any(v is None or isinstance(v,str) and not v.strip() for v in r):s='Missing required value'
        elif ids[str(r[0]).strip().upper()]>1:s='Duplicate ID'
        elif not isinstance(r[1],datetime) or r[2] not in channels or any(not isinstance(v,(int,float)) or v<0 for v in r[3:]):s='Invalid value'
        else:s='Include'
        a=round(r[3]*r[4],2) if s=='Include' else 0
        status.append(s);amounts.append(a)
        if s=='Include':channels[r[2]]+=a
    return status,amounts,channels

cases={'baseline':{},'changed_units':{'D7':5},'resolved_duplicate':{'A16':'S011'},'missing_price':{'E7':None},'normalized_duplicate':{'A8':' s001 '},'wildcard_ids':{'A7':'S*','A8':'S?'},'invalid_number':{'D7':'four'},'negative_price':{'E7':-1},'invalid_channel':{'C7':'Wholesale'},'empty_row':{f'{c}7':None for c in 'ABCDE'}}
reports=[]
with TemporaryDirectory() as tmp:
 for name,edits in cases.items():
    w=openpyxl.load_workbook(FILE)
    for cell,value in edits.items():w['Input'][cell]=value
    statuses,amounts,channels=oracle(w)
    path=Path(tmp)/(name+'.xlsx');w.save(path)
    sol=formulas.ExcelModel().loads(str(path)).finish().calculate()
    def val(sheet,cell):
        key=next(k for k in sol if str(k).endswith(f"]{sheet.upper()}'!{cell}"))
        return sol[key].value[0,0]
    for i,(status,amount) in enumerate(zip(statuses,amounts),7):
        assert val('Input',f'F{i}')==status,(name,i,val('Input',f'F{i}'),status)
        assert float(val('Input',f'G{i}'))==amount,(name,i,'amount')
        assert val('Exceptions',f'C{i}')==(status if status not in ('','Include') else ''),(name,i,'exceptions')
    expected={'B6':sum(amounts),'B7':statuses.count('Include'),'B8':sum(s not in ('','Include') for s in statuses),'B10':channels['Online'],'B11':channels['Retail']}
    for cell,value in expected.items():assert float(val('Summary',cell))==value,(name,cell,val('Summary',cell),value)
    reports.append({'case':name,'total':sum(amounts),'included':statuses.count('Include'),'flagged':expected['B8'],'passed':True})
# Check the file's saved caches match real baseline recalculation for passive viewers.
cached=openpyxl.load_workbook(FILE,data_only=True)
assert [cached['Summary'][c].value for c in ['B6','B7','B8','B10','B11']]==[1000,8,4,540,460]
assert not cached._external_links
print(json.dumps(reports,indent=2))
