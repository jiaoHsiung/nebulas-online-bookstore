import AsyncComponent from './async-component';

export default [
	{
		name: '首页',
		icon: 'home',
		path: '/',
		component: AsyncComponent(() => import('.//home'))
	}
]