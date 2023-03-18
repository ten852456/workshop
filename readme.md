311_workshop\
Frontend : angular\
\
\
Backend : expressjs\
backend จะใช้ express โดยจะมีข้อมูลที่ mock ขึ้นมาคือ dresses \
โดยใน model dresses จะมี field ดังต่อไปนี้\
1.ID : int\
2.Types :string\
3.RentalDate : string\
\
โดยจะมีระบบ crud โดยแบ่งเป็นดังนี้\
create(POST) : http://localhost:8000/dresses \
read(GET) : http://localhost:8000/dresses \
update(PUT) : http://localhost:8000/dresses/:id \
delete(DELETE) : http://localhost:8000/dresses/:id \
\
และมี function เพิ่มเติมเป็น\
\
read by id(GET): http://localhost:8000/dress/:id\
update RentalDate(PUT): http://localhost:8000/dresses/:id/rentaldate\
\
และจะมีการปรับปรุง RentalDate (วันที่จอง) เป็นวันที่ run server โดยอัตโนมัติเพื่อให้ง่ายต่อการจำลองการใช้ server