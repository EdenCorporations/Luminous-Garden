# Spreadsheet reporting example

This is a fictional demonstration, not customer evidence.

Use a Python environment with `xlsxwriter`, `openpyxl`, and `formulas`.
Run `build.py` to create the downloadable workbook, then `verify.py` to recalculate it.
The verifier compares every status, included amount, exception, and summary with an independent Python calculation.
Ten cases cover input edits, missing values, duplicate IDs, normalization, wildcard IDs, invalid numbers, negative prices, channels, and empty rows.
The published workbook retains cached baseline values for viewers that do not calculate formulas.
Desktop Excel compatibility was not independently tested.

`preview.py` exports the saved Summary values into `/tmp/eden-workbook-preview.html`.
Open that temporary file in Chrome and capture it at 920×780 to regenerate the page image.
The image is an HTML rendering of workbook values, not an Excel application screenshot.
Do not publish the temporary HTML as another page.

Edit blue Input cells A7:E38. Keep formulas in F:H. The example has 32 input rows.
All copies of duplicate IDs are held out. IDs ignore case and surrounding spaces.
Summary totals use only rows marked Include. Empty input rows remain empty in Exceptions.
No macros, external links, uploads, or personal data are included.
