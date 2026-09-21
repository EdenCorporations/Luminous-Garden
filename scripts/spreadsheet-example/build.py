"""Build the fictional reporting workbook. Run with xlsxwriter installed."""
from pathlib import Path
from datetime import datetime
from collections import Counter
import xlsxwriter
ROOT=Path(__file__).resolve().parents[2]
DEST=ROOT/'public/downloads/eden-spreadsheet-reporting.xlsx'
ROWS=[['S001',datetime(2026,9,14),'Online',4,25],['S002',datetime(2026,9,14),'Retail',3,40],['S003',datetime(2026,9,14),'Online',2,75],['S004',datetime(2026,9,14),'Retail',5,20],['S005',datetime(2026,9,14),'Online',6,15],['S006',datetime(2026,9,14),'Retail',2,60],['S007',datetime(2026,9,14),'Online',1,200],['S008',datetime(2026,9,14),'Retail',4,30],['S009',datetime(2026,9,14),'Online',3,50],['S009',datetime(2026,9,14),'Online',3,50],['S010',datetime(2026,9,14),'Retail',None,40],[None,datetime(2026,9,14),'Retail',2,25]]

def expected(rows):
    counts=Counter(str(r[0]).strip().upper() for r in rows if r[0])
    out=[]
    for r in rows:
        if not any(v is not None and v!='' for v in r): s=''
        elif any(v is None or (isinstance(v,str) and not v.strip()) for v in r): s='Missing required value'
        elif counts[str(r[0]).strip().upper()]>1: s='Duplicate ID'
        elif r[2] not in ['Online','Retail'] or not isinstance(r[1],datetime) or any(not isinstance(v,(int,float)) or v<0 for v in r[3:]): s='Invalid value'
        else: s='Include'
        out.append((s,round(r[3]*r[4],2) if s=='Include' else 0))
    return out

def build():
    DEST.parent.mkdir(parents=True,exist_ok=True)
    w=xlsxwriter.Workbook(DEST)
    w.set_properties({'title':'Eden | Spreadsheet reporting example','comments':'Internal demonstration. Fictional data only.'})
    w.set_calc_mode('auto')
    fmt={}
    for name,opts in {'title':{'bold':True,'font_size':22,'font_color':'#ECE7DE','bg_color':'#161412'},'note':{'font_color':'#514A43','text_wrap':True,'valign':'top'},'head':{'bold':True,'font_color':'#FFFFFF','bg_color':'#A83C26','border':1},'input':{'font_color':'#215A80','bg_color':'#EEF6FA','border':1,'border_color':'#DEDAD4'},'calc':{'font_color':'#24201D','bg_color':'#F1EEE8','border':1,'border_color':'#DEDAD4'},'money':{'num_format':'#,##0.00','bg_color':'#F1EEE8','border':1,'border_color':'#DEDAD4'},'date':{'num_format':'yyyy-mm-dd','font_color':'#215A80','bg_color':'#EEF6FA','border':1,'border_color':'#DEDAD4'},'flag':{'bg_color':'#FCE4DA','font_color':'#8E2F1A'},'big':{'bold':True,'font_size':18,'num_format':'#,##0.00','bg_color':'#F1EEE8'},'label':{'bold':True,'font_size':12,'bg_color':'#F1EEE8'}}.items():fmt[name]=w.add_format({'font_name':'Calibri',**opts})
    sheets={n:w.add_worksheet(n) for n in ['Summary','Input','Exceptions']}
    for n,s in sheets.items():
        s.hide_gridlines(2);s.set_zoom(100);s.set_tab_color('#C84B31');s.set_landscape();s.fit_to_pages(1,1)
    s=sheets['Input'];s.set_column('A:A',16);s.set_column('B:B',17);s.set_column('C:C',15);s.set_column('D:E',13);s.set_column('F:F',27);s.set_column('G:G',20);s.set_column('H:H',18,None,{'hidden':True})
    s.merge_range('A1:G1','Weekly sales | fictional input',fmt['title']);s.set_row(0,36)
    for row,txt in [(2,'Internal demonstration. Edit blue cells A7:E38 only. Gray columns contain formulas. All amounts use fictional currency units.'),(3,'All five fields are required. Use real spreadsheet dates, Online or Retail, and nonnegative numeric units and prices.'),(4,'Both copies of a duplicate ID are excluded. IDs ignore case and surrounding spaces. Empty rows are ignored. Capacity: 32 rows.')]:s.merge_range(row-1,0,row-1,6,txt,fmt['note']);s.set_row(row-1,32)
    heads=['Record ID','Week starting','Channel','Units','Unit price','Check','Included amount','Normalized ID']
    s.write_row('A6',heads,fmt['head']);s.freeze_panes(6,0);s.autofilter('A6:G38')
    allrows=ROWS+[[None]*5 for _ in range(32-len(ROWS))];checks=expected(allrows)
    for i,(r,(status,amount)) in enumerate(zip(allrows,checks),7):
        for j,v in enumerate(r):s.write(i-1,j,v,fmt['date'] if j==1 else fmt['input'])
        s.write_formula(f'H{i}',f'=UPPER(TRIM(A{i}))',fmt['calc'],str(r[0]).strip().upper() if r[0] else '')
        criteria=f'SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(H{i},"~","~~"),"*","~*"),"?","~?")'
        formula=f'=IF(COUNTA(A{i}:E{i})=0,"",IF(OR(H{i}="",B{i}="",TRIM(C{i})="",D{i}="",E{i}=""),"Missing required value",IF(COUNTIF($H$7:$H$38,{criteria})>1,"Duplicate ID",IF(OR(NOT(ISNUMBER(B{i})),B{i}<1,NOT(ISNUMBER(D{i})),NOT(ISNUMBER(E{i})),D{i}<0,E{i}<0,AND(C{i}<>"Online",C{i}<>"Retail")),"Invalid value","Include"))))'
        s.write_formula(f'F{i}',formula,fmt['calc'],status)
        s.write_formula(f'G{i}',f'=IF(F{i}="Include",ROUND(D{i}*E{i},2),0)',fmt['money'],amount)
    s.data_validation('C7:C38',{'validate':'list','source':['Online','Retail']})
    s.conditional_format('F7:F38',{'type':'formula','criteria':'=AND(F7<>"",F7<>"Include")','format':fmt['flag']})
    s.print_area('A1:G19')
    e=sheets['Exceptions'];e.set_column('A:A',14);e.set_column('B:B',20);e.set_column('C:C',29)
    e.merge_range('A1:C1','Exceptions | review before reporting',fmt['title']);e.set_row(0,36)
    e.merge_range('A2:C3','Only flagged input rows appear below. Blank lines are intentional; filter Check to hide blanks. Correct blue Input cells.',fmt['note'])
    e.merge_range('A4:C4','Internal demonstration. Each line maps to its original Input row.',fmt['note']);e.set_row(3,30)
    e.write_row('A6',['Input row','Record ID','Check'],fmt['head']);e.autofilter('A6:C38');e.freeze_panes(6,0)
    for i,(r,(status,_)) in enumerate(zip(allrows,checks),7):
        condition=f'AND(Input!F{i}<>"",Input!F{i}<>"Include")';flag=status not in ('','Include')
        e.write_formula(f'A{i}',f'=IF({condition},{i},"")',fmt['calc'],i if flag else '')
        e.write_formula(f'B{i}',f'=IF({condition},IF(Input!A{i}="","(missing)",Input!A{i}),"")',fmt['calc'],r[0] or '(missing)' if flag else '')
        e.write_formula(f'C{i}',f'=IF({condition},Input!F{i},"")',fmt['calc'],status if flag else '')
    a=sheets['Summary'];a.set_column('A:A',36);a.set_column('B:B',23);a.set_column('C:C',24)
    a.merge_range('A1:C1','Weekly sales | checked report',fmt['title']);a.set_row(0,38)
    a.merge_range('A2:C2','INTERNAL DEMONSTRATION / FICTIONAL DATA',fmt['note'])
    a.merge_range('A3:C4','Input holds editable records. Exceptions shows rows needing review. Summary includes only rows marked Include.',fmt['note'])
    summary=[(6,'Included amount','=SUM(Input!G7:G38)',sum(x[1] for x in checks)),(7,'Included records','=COUNTIF(Input!F7:F38,"Include")',8),(8,'Rows needing review','=COUNTIF(Input!F7:F38,"Duplicate ID")+COUNTIF(Input!F7:F38,"Missing required value")+COUNTIF(Input!F7:F38,"Invalid value")',4),(10,'Online','=SUMIF(Input!C7:C38,"Online",Input!G7:G38)',540),(11,'Retail','=SUMIF(Input!C7:C38,"Retail",Input!G7:G38)',460)]
    for row,label,formula,value in summary:
        a.write(row-1,0,label,fmt['label']);a.write_formula(row-1,1,formula,fmt['big'],value);a.set_row(row-1,32)
    a.merge_range('A13:C14','Try it: change Input!D7 from 4 to 5. The total changes from 1,000 to 1,025. Restore 4 to reset.',fmt['note'])
    a.merge_range('A16:C17','Baseline: 12 input rows; 8 included; 4 flagged. Both S009 rows, one missing unit value, and one missing ID stay out.',fmt['note'])
    a.merge_range('A19:C21','Limits: 32 rows, one reporting period, one fictional currency. No tax, refunds, imports, macros, or external connections. No client results or measured savings. Tested with the formulas calculation engine; desktop Excel compatibility is not independently verified.',fmt['note'])
    a.print_area('A1:C21');w.close();print(DEST)
if __name__=='__main__':build()
