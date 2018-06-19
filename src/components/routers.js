import AsyncComponent from './async-component';

export default [
	{
		name: '首页',
		path: '/',
		component: AsyncComponent(() => import('./home'))
	},
	{
		name: 'shu',
		path: '/book-list',
		component: AsyncComponent(() => import('./bookstore/list'))
	}
]