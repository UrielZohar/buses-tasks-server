const drivers = [
    {
      "id": "5fac5d4f6fcd3ccffead243c",
      "name": "Castaneda Strickland",
      "phone": "(927) 581-2747",
      "group": "G1"
    },
    {
      "id": "5fac5d4f119a2e353276561f",
      "name": "Dana Downs",
      "phone": "(861) 517-3443",
      "group": "G1"
    },
    {
      "id": "5fac5d4f95210748244fd82f",
      "name": "Ramsey Waller",
      "phone": "(976) 571-3745",
      "group": "G5"
    },
    {
      "id": "5fac5d4fb1b61d0056d158f4",
      "name": "Opal Hogan",
      "phone": "(902) 422-2729",
      "group": "G2"
    },
    {
      "id": "5fac5d4f2c5dd69de62c9c9a",
      "name": "Dianne Hawkins",
      "phone": "(965) 490-2492",
      "group": "G1"
    },
    {
      "id": "5fac5d4f5b08776860a3da91",
      "name": "Corrine Williamson",
      "phone": "(895) 481-2968",
      "group": "G4"
    },
    {
      "id": "5fac5d4f4404977ba2243840",
      "name": "Perkins David",
      "phone": "(958) 421-2273",
      "group": "G4"
    },
    {
      "id": "5fac5d4f08df6bb1fb31542d",
      "name": "Scott Newton",
      "phone": "(815) 408-3831",
      "group": "G4"
    },
    {
      "id": "5fac5d4f7e8ec42e831fb8ed",
      "name": "Jenna Gutierrez",
      "phone": "(980) 568-2039",
      "group": "G1"
    },
    {
      "id": "5fac5d4fd5f8e59e04ca31a4",
      "name": "Everett Brock",
      "phone": "(887) 572-3639",
      "group": "G3"
    },
    {
      "id": "5fac5d4fa49f51f9c0b7da7f",
      "name": "Adams Bowen",
      "phone": "(872) 517-3634",
      "group": "G3"
    },
    {
      "id": "5fac5d4f47ed2bdb708f82dc",
      "name": "Brooks Singleton",
      "phone": "(985) 484-3521",
      "group": "G1"
    },
    {
      "id": "5fac5d4f6e8afaa3dc87b19f",
      "name": "Mindy Guthrie",
      "phone": "(943) 454-2986",
      "group": "G4"
    },
    {
      "id": "5fac5d4f1f6cae881e2baabc",
      "name": "Workman Lloyd",
      "phone": "(868) 530-2566",
      "group": "G2"
    },
    {
      "id": "5fac5d4f1f95defcc371f31d",
      "name": "Melba Clark",
      "phone": "(911) 510-3829",
      "group": "G1"
    },
    {
      "id": "5fac5d4f165d16a0a4d9b0df",
      "name": "Cynthia Joyce",
      "phone": "(817) 517-3007",
      "group": "G1"
    },
    {
      "id": "5fac5d4f160d02d53cce1169",
      "name": "Kelly Romero",
      "phone": "(816) 403-3683",
      "group": "G3"
    },
    {
      "id": "5fac5d4fb8118fcb2af1ab73",
      "name": "Cathleen Vincent",
      "phone": "(836) 476-2218",
      "group": "G4"
    },
    {
      "id": "5fac5d4f962d6fb5d2b9beee",
      "name": "Conway Knight",
      "phone": "(813) 512-3198",
      "group": "G5"
    },
    {
      "id": "5fac5d4fa96731987108df45",
      "name": "Pansy Petersen",
      "phone": "(969) 530-2276",
      "group": "G5"
    },
    {
      "id": "5fac5d4fa9f1c24c7b98afca",
      "name": "Greene Ross",
      "phone": "(936) 498-2871",
      "group": "G3"
    },
    {
      "id": "5fac5d4f91bb5ecdd6a92c9c",
      "name": "Ora Wolfe",
      "phone": "(990) 466-2004",
      "group": "G1"
    },
    {
      "id": "5fac5d4f1a17d10cf9bb3357",
      "name": "Georgette Huffman",
      "phone": "(904) 448-3210",
      "group": "G2"
    },
    {
      "id": "5fac5d4f56549c91387bb1ff",
      "name": "Lorie Cohen",
      "phone": "(958) 413-3658",
      "group": "G4"
    },
    {
      "id": "5fac5d4f0bbd2185304455df",
      "name": "Medina Vasquez",
      "phone": "(916) 483-2097",
      "group": "G1"
    }
];
  
const driversMap = {};
drivers.forEach(driver => {
  driversMap[driver.id] = true;
});

module.exports = {
  drivers,
  driversMap,
};