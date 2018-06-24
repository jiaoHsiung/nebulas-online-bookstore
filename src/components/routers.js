import AsyncComponent from './async-component';

export default [
	{
		name: '首页',
		path: '/',
		exact: true,
		component: AsyncComponent(() => import('./bookstore/shop'))
	},
	{
		name: '书店',
		path: '/book-lsit',
		component: AsyncComponent(() => import('./bookstore/shop'))
	},
	{
		name: '个人信息',
		exact: true,
		component: AsyncComponent(() => import('./bookstore/personInfo'))
	},
	{
		name: '关于',
		path: '/about',
		component: AsyncComponent(() => import('./bookstore/about'))
	},
	{
		name: '联系',
		path: '/contact',
		component: AsyncComponent(() => import('./bookstore/list'))
	},
	{
		name: '常见问题',
		path: '/faqs',
		component: AsyncComponent(() => import('./bookstore/faqs'))
	}
]