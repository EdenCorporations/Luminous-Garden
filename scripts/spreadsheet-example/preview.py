"""Export the real workbook's saved Summary values to a browser preview for capture."""
from pathlib import Path
from html import escape
import openpyxl
root=Path(__file__).resolve().parents[2]
s=openpyxl.load_workbook(root/'public/downloads/eden-spreadsheet-reporting.xlsx',data_only=True)['Summary']
rows=''.join(f'<tr><th>{escape(s[f"A{r}"].value)}</th><td>{s[f"B{r}"].value:,.2f}</td></tr>' for r in [6,7,8,10,11])
html='''<!doctype html><html><head><meta charset="utf-8"><title>Workbook summary preview</title><style>*{box-sizing:border-box}body{margin:0;padding:40px;background:#e8e4dc;font:18px Arial,sans-serif;color:#25211e}.sheet{background:#fffdf9;padding:32px;width:840px;border:1px solid #c8c1b5}h1{font-size:30px;margin:0 0 10px}small{font-size:12px;letter-spacing:1px;color:#7a3c2d}p{line-height:1.5;font-size:15px;max-width:720px}table{border-collapse:collapse;width:100%;margin:28px 0}th,td{text-align:left;border-bottom:1px solid #d9d3c9;padding:16px;background:#f1eee8}td{text-align:right;font-variant-numeric:tabular-nums;font-size:23px;font-weight:bold}.tabs{margin-top:28px;border-top:1px solid #cec7bb;padding-top:15px;font-size:14px}.active{background:#923721;color:white;padding:10px 20px;margin-right:24px}.tab{margin-right:24px;color:#59524a}</style></head><body><div class="sheet"><small>INTERNAL DEMONSTRATION / FICTIONAL DATA</small><h1>'''+escape(s['A1'].value)+'''</h1><p>'''+escape(s['A3'].value)+'''</p><table>'''+rows+'''</table><p>'''+escape(s['A13'].value)+'''</p><p>'''+escape(s['A16'].value)+'''</p><div class="tabs"><span class="active">Summary</span><span class="tab">Input</span><span class="tab">Exceptions</span></div></div></body></html>'''
Path('/tmp/eden-workbook-preview.html').write_text(html)
