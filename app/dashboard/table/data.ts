export const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    paymentMethod: "Credit Card",
    subRows: [
      {
        id: "3u1reuv4qq",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
        paymentMethod: "PayPal",
      },
      {
        id: "derv1ws0a1",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
        paymentMethod: "Credit Card",
      },
    ],
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    paymentMethod: "PayPal",
    subRows: [
      {
        id: "bhqecj4p21",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
        paymentMethod: "PayPal",
      },
      {
        id: "derv1ws031",
        amount: 307,
        status: "processing",
        email: "Monserrat44@gmail.com",
        paymentMethod: "Credit Card",
      },
    ],
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "bhqecj4p1",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "bhqecj4p2",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "derv1ws03",
    amount: 307,
    status: "processing",
    email: "Monserrat44@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    id: "5kma53ae4",
    amount: 74,
    status: "success",
    email: "Silas22@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    id: "bhqecj45",
    amount: 921,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "bhqecj4p6",
    amount: 1721,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "bhqecj4p7",
    amount: 121,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "derv1ws08",
    amount: 137,
    status: "processing",
    email: "Monserrat44@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    id: "5kma53a9",
    amount: 374,
    status: "success",
    email: "Silas22@gmail.com",
    paymentMethod: "Credit Card",
  },
  {
    id: "bhqecj4p10",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "bhqecj4p11",
    amount: 321,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
  {
    id: "bhqecj4p12",
    amount: 521,
    status: "failed",
    email: "carmella@hotmail.com",
    paymentMethod: "PayPal",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  paymentMethod: string
  subRows?: Payment[]
}
