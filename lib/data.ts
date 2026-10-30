export type Budget={category:string,limit:number,spent:number};
export type RequestItem={
  id:string,
  title:string,
  requester:string,
  amount:number,
  category:string,
  verdict:"approve"|"review"|"reject",
  reason:string
};
export type Order={
  id:string,
  vendor:string,
  item:string,
  amount:number,
  status:"Paid"|"Shipped"|"Delivered"|"Problem",
  deliveryBy:string,
  disputeBy:string
};
export type CaseItem={
  id:string,
  orderId:string,
  issue:string,
  confidence:number,
  evidence:string[],
  draft:string
};

export const money=(n:number)=>`$${n.toLocaleString("en-US")}`;

export const budgets:Budget[]=[
  {category:"Hardware",limit:2000,spent:1450},
  {category:"Software",limit:800,spent:310},
  {category:"Events",limit:1200,spent:1180},
  {category:"Travel",limit:1500,spent:420}
];

export const requests:RequestItem[]=[
  {id:"REQ-212",title:"Standing desk converter",requester:"Priya",amount:180,category:"Hardware",verdict:"approve",reason:"Within the Hardware budget and the vendor was used twice before without issues."},
  {id:"REQ-213",title:"Design tool annual plan",requester:"Alex",amount:420,category:"Software",verdict:"review",reason:"Within budget, but a similar plan was bought in March. Check for a duplicate."},
  {id:"REQ-214",title:"Hackathon venue deposit",requester:"Sam",amount:600,category:"Events",verdict:"reject",reason:"Would exceed the Events limit by $580 and no approver is assigned."}
];

export const orders:Order[]=[
  {id:"ORD-1041",vendor:"KeyCraft",item:"Mechanical keyboards x4",amount:320,status:"Delivered",deliveryBy:"2026-10-18",disputeBy:"2026-11-17"},
  {id:"ORD-1042",vendor:"CloudDesk",item:"Team workspace plan",amount:310,status:"Paid",deliveryBy:"2026-10-25",disputeBy:"2026-11-24"},
  {id:"ORD-1043",vendor:"ScreenWorld",item:"27-inch monitor",amount:240,status:"Problem",deliveryBy:"2026-10-15",disputeBy:"2026-11-13"},
  {id:"ORD-1044",vendor:"CableHub",item:"USB-C docks x3",amount:150,status:"Shipped",deliveryBy:"2026-10-29",disputeBy:"2026-11-28"}
];

export const cases:CaseItem[]=[
  {
    id:"CASE-07",
    orderId:"ORD-1043",
    issue:"Item not received (delivery was due 2026-10-15)",
    confidence:82,
    evidence:[
      "Order paid 2026-10-08, confirmation email on file",
      "Carrier tracking has shown 'In transit' since 2026-10-12",
      "Merchant policy promises delivery within 7 days",
      "No reply to the team's message sent 2026-10-19"
    ],
    draft:"Hello ScreenWorld team,\n\nOur order ORD-1043 (27-inch monitor, $240) was paid on 8 October and was due by 15 October. Tracking has not updated since 12 October and the item has not arrived. We wrote to you on 19 October without a reply.\n\nPlease either confirm a delivery date within 3 business days or refund the order in full. If we do not hear back, we will open a dispute through PayPal.\n\nThank you,\nThe Ghold team"
  }
];
