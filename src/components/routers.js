import AsyncComponent from './async-component';

export default [
	{
		name: '首页',
		path: '/',
		component: AsyncComponent(() => import('./home'))
	},
	{
		name: '书店',
		path: '/book-list',
		component: AsyncComponent(() => import('./bookstore/list'))
	},
	{
		name: '关于',
		path: '/about',
		component: AsyncComponent(() => import('./bookstore/template'))
	},
	{
		name: '联系',
		path: '/contact',
		component: AsyncComponent(() => import('./bookstore/shop'))
	}
]