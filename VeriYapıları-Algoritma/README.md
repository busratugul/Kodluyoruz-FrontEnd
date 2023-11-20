
# Proje 1
---
# Selection Sort Projesi

#### Insertion Sort

* Yukarıda verilen dizini sort türüne göre aşamalarını yazınız.

   1. [22,27,16,2,18,6]
   2. [2,27,16,22,18,6]
   3. [2,6,16,22,18,27]
   4. [2,6,16,18,22,27]

* Big-O gösterimini yazınız.
  n+(n-1)+(n-2)+(n-3)+(n-4)+1= (n(n+1))/2= n^2 Big-O = n^2

* Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız.
  1. Average case: Aradığımız sayının ortada olması
  2. Worst case: Aradığımız sayının sonda olması
  3. Best case: Aradığımız sayının dizinin en başında olması.

Aradığımız sayı dizinin ortasında. Average case.

* [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

1. [7,3,5,8,2,9,4,15,6]
2. [2,3,5,8,7,9,4,15,6]
3. [2,3,4,8,7,9,5,15,6]
4. [2,3,4,5,7,9,8,15,6]
   
----
# PROJE 2
---

### Merge Sort Projesi
---
Yukarıdaki dizinin sort türüne göre aşamalarını yazınız. Big-O gösterimini yazınız.

[16,21,11,8,12,22]

- [16,21,11] [8,12,22]
- [16,21] [11] - [8,12] [22]
- [16] [21] [11] - [8] [12] [22]
- [16,21] [8,11] [12,22]
- [8,11,12,16,21,22]

---
# PROJE 3
---

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.
Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

- Step 1: 1<5 için Root' un solunda 1
- Step 2: 7>5 için Root' un sağında 7
- Step 3: 0<1 ve 0<5 için Root' un solunda 0
- Step 4: 3>1 ve 3<5 için Root' un sağında 3
- Step 5: 2<3, 2>1 ve 2<5 için Root' un solunda 2
- Step 6: 4>3, 4>1 ve 4<5 için Root' un sağında 4
- Step 7: 6<7 ve 6>5 için Root' un solunda 6
- Step 8: 9>7 ve 9>5 için Root' un sağında 9
- Step 9: 8<9 ve 8>5 için Root' un solunda 8