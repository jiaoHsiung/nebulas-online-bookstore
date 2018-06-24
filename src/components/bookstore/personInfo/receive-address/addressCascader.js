import React from 'react';
import { Select } from 'antd';
import Cities from './city.json';

const provinceData = Cities.map(province => {
	return province.name
});
let cityData = {};
Cities.map(province => {
	cityData[province.name] = province.city.map(city => {
		return city.name;
	})
})
let countyData = {};
Cities.map(province => {
	province.city.map(city => {
		countyData[city.name] = city.area;
	})
})
class AddressCascader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: cityData[provinceData[0]],
			country: countyData[cityData[provinceData[0]]],
			provinceValue: '省份',
			cityValue: '地级市',
			countryValue: '市、县级市'
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.currentProvince !== nextProps.currentProvince) {
			this.setState({
				provinceValue: nextProps.currentProvince,
				cityValue: nextProps.currentCity,
				countryValue: nextProps.currentCountry,
			});
		}
		if (this.props.createFlag !== nextProps.createFlag) {
			this.setState({
				provinceValue: '省份',
				cityValue: '地级市',
				countryValue: '市、县级市'
			});
		}
	}

	handleProvinceChange = (value) => {
		if (value !== '省份') {
			this.setState({
				city: cityData[value]
			});
			this.props.changeProvince(value);
		}
		this.setState({
			provinceValue: value,
			cityValue: '地级市',
			countryValue: '市、县级市'
		});
	}

	handleCityChange = (value) => {
		this.setState({
			cityValue: value,
			country: countyData[value],
		});
		this.props.changeCity(value);
	}

	handleCountryChange = (value) => {
		this.setState({
			countryValue: value
		});
		this.props.changeCountry(value);
	}


	render() {
		const provinceOptions = provinceData.map(province => <Select.Option key={province}>{province}</Select.Option>);
		const cityOptions = this.state.city.map(city => <Select.Option key={city}>{city}</Select.Option>);
		const countyOptions = this.state.country.map(country => <Select.Option key={country}>{country}</Select.Option>);
		return (
			<div>
				<Select onChange={this.handleProvinceChange} style={{ width: 70 }} value={this.state.provinceValue}>
					<Select.Option key="省份">省份</Select.Option>
					{provinceOptions}
				</Select>
				<Select onChange={this.handleCityChange} style={{ width: 80 }} value={this.state.cityValue}>
					{this.state.provinceValue === "省份" ? <Select.Option key="地级市">地级市</Select.Option> : cityOptions}
				</Select>
				<Select style={{ width: 90 }} onChange={this.handleCountryChange} value={this.state.countryValue}>
					{this.state.cityValue === "地级市" ? <Select.Option key="市、县级市">市、县级市</Select.Option> : countyOptions}
				</Select>
			</div>
		);
	}
}

export default AddressCascader;