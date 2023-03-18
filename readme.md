311_workshop\
สมาชิก\
1.นายณัฐดนัย ด้วงปราง 6310110146\
2.นายธนวัฒน์ พละบุญ 6310110191\
3.นางสาวอัมนี หิมะ 6310110578 \
Frontend : angular\
frontend จะมีการสร้าง page ขึ้นมา 2 แบบ คือ 1.Admin 2.User โดยสามารถเลือกได้ที่ navbar\
ในหน้า Admin จะมีการแสดงผลข้อมูลเป็นตารางโดยจะสามารถ create read update delete ได้\
ในหน้า User จะมีการแสดงผลเป็น card โดยเมื่อกดไปที่ item จะมี modal เด้งขึ้นมาและสามารถที่จะเช่าชุดได้\
โดยการเช่าชุดจะเป็นการกรอกชื่อ เบอร์โทรศัทพ์ และอีเมลล์ ให้ทางร้าน\
จากนั้นชุดที่มีการเช่าแล้วก็จะไม่มีปุ่มให้เช่า\
url หน้า user : http://localhost:4200/ \
url หน้า Admin : http://localhost:4200/Adminview \ 

Backend : expressjs\
backend จะใช้ express โดยจะมีข้อมูลที่ mock ขึ้นมาคือ dresses \
โดยใน model dresses จะมี field ดังต่อไปนี้\
1.ID : int\
2.Types :string\
3.RentalDate : string\
4.picUrl : string\
5.price : int\
\
โดยจะมีระบบ crud โดยแบ่งเป็นดังนี้\
create(POST) : http://localhost:8000/dresses \
read(GET) : http://localhost:8000/dresses \
update(PUT) : http://localhost:8000/dresses/:id \
delete(DELETE) : http://localhost:8000/dresses/:id \
\
และมี function เพิ่มเติมเป็น\
\
read by id(GET): http://localhost:8000/dress/:id \
update RentalDate(PUT): http://localhost:8000/dresses/:id/rentaldate \
\
และจะมีการปรับปรุง RentalDate (วันที่จอง) เป็นวันที่ run server โดยอัตโนมัติเพื่อให้ง่ายต่อการจำลองการใช้ server