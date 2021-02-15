#Auth
- [x] User harus Register
- [ ] User Login menggunakan email dan password
- [ ] Login menghasilkan jsonwebtoken



#Trainer
- [x] 1 Trainer memiliki lebih dari satu course
- [ ] Hanya user dengan role admin yang dapat menambahkan trainer


#Transaction
- [ ] Transaction dimiliki oleh User
- [x] Transaction memiliki field invoiceNo yang bertipe UUID unik dan auto generate
- [x] Transaksi memiliki status paid,pending,cancel
- [x] Tiap transaksi memiliki detail, detail berisi course course yang dibeli
- [ ] Ketika transaksi berubah menjadi paid, maka user akan memiliki course course yang ada didalam transaction detail

#Course
- [x] 1 Course dimiliki oleh satu trainer
- [x] Course memiliki banyak review
- [ ] User dengan role admin yang bisa membuat course

#User
- [x] 1 user bisa memiliki banyak course
- [x] 1 user bisa memiliki banyak course didalam cartnya
- [x] 1 user bisa memiliki banyak course didalam whislist
- [ ] User bisa memiliki course setelah proses transaksi berhasil
- [ ] User bisa melakukan review course apabila dia memiliki course tersebut
- [ ] User bisa menambahkan course kedalam cart nya
- [x] user bisa memiliki lebih dari satu transaksi