import AsyncComponent from '../../async-component';

export default [
	{
		name: '我的信息',
		path: '/person/my-info',
		component: AsyncComponent(() => import('./myinfo'))
	},
	{
		name: '收货地址',
		path: '/person/receive-address',
		component: AsyncComponent(() => import('./receive-address'))
	},
	{
		name: '我的订单',
		path: '/person/my-order',
		component: AsyncComponent(() => import('./myorder'))
	},
	{
		name: '我的收藏',
		path: '/person/my-favorites',
		component: AsyncComponent(() => import('./bookfavorites'))
	}
]

// ,
// 	{
// 		name: '收货地址',
// 		path: '/receive-address',
// 		component: AsyncComponent(() => import('./receive-address'))
// 	},
	// {
	// 	name: '我的订单',
	// 	path: '/my-order',
	// 	component: AsyncComponent(() => import('./myorder'))
	// },
	