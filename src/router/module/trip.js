const tripRoutes = [
  {
    path:'/trip',
    name:'Trip',
    components:() => import('@/views/trip/trip'),
    meta:{  //定义的是窗口的名字
      title:'出行'
    }
  }
]