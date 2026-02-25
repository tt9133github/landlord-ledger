# 房东记账助手 (LANDLORD-LEDGER)

## 中文版
一个单文件的房东管理小工具，用于记录房租收支、维修支出，并按入住天数进行水/气/物业费加权分摊。

### 功能
- 房间与租客信息管理（租金、入住日期）
- 收租登记（默认 3 个月周期）
- 水/气/物业费按入住天数加权分摊
- 维修等房东支出记录
- JSON 数据导出/导入
- 纯前端运行，数据仅保存在浏览器本地（localStorage）

### 快速开始
1. 用浏览器打开 `index.html`。
2. 编辑房间、添加账单、记录支出。
3. 通过“备份/恢复”导出或导入 JSON 数据。

### 说明
- 纯前端工具，无服务器、无上传。
- 开源前请避免将个人数据文件提交到版本库。

---

## English Version
A single-file landlord tool for rent income/expense tracking and weighted utility splitting by occupancy days.

### Features
- Room and tenant management (rent, start date)
- Rent collection records (default 3-month cycle)
- Weighted split for water/gas/property fees by occupancy days
- Landlord maintenance expense tracking
- JSON export/import
- Front-end only; data stays in browser (localStorage)

### Quick Start
1. Open `index.html` in a modern browser.
2. Edit rooms, add bills, and record expenses.
3. Use Backup/Restore to export or import JSON data.

### Notes
- Front-end only, no server, no upload.
- Keep personal data files out of version control before publishing.
