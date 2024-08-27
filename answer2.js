db.sales.aggregate([
    {$unwind: "$items"},
  
    {$project: {
      store: 1,
      month: {$month: "$date"},
      itemRevenue: {$multiply: ["$items.quantity", "$items.price"]}
    }},
  
    {$group: {
      _id: {store: "$store", month: "$month"},
      totalRevenue: {$sum: "$itemRevenue"},
      itemCount: {$sum: 1}
    }},
  
    {$project: {
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: {$divide: ["$totalRevenue", "$itemCount"]}
    }},
  
    {$unset: "_id"},
  
    {$sort: {store: 1, month: 1}}
  ])