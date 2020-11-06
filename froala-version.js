import FroalaCharts from 'froalacharts';

const froalaDetails = () => {
	console.log("Froala Details - "+FroalaCharts.versionDetails)
	console.log("Release date - "+new Date(FroalaCharts.versionDetails[1]))
}

//How to use this
//import froalaDetails from './froala-version'
//froalaDetails()

module.exports = froalaDetails