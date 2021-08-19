import React from 'react';
import {Grid,Button,Typography} from '@material-ui/core';
import "./Smartdeal.css";
import {Row,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import SearchBar from "material-ui-search-bar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ShoppingCart} from '@material-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';



class Smartdeal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	pro: '',
    	search: '',
    	value:'',
    	website:'',
    	news:'',
    };
  }


  capitalizeString =(string)=>{
  		const arr = string.split(" ");
  		for (var i = 0; i < arr.length; i++) {
  		arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  		}
  		const str2 = arr.join(" ");
		return str2;
  }

  slider=async()=>{
			var slides=[];
			const slider = await fetch("/api4/batch?t=%2Fdata%2Fbbc-morph-{lx-commentary-data-paged%2Fabout%2Fe745fc56-51bf-46b5-9b74-f0f529ea4d8e%2FisUk%2Ffalse%2Flimit%2F20%2FnitroKey%2Flx-nitro%2FpageNumber%2F0%2Fversion%2F1.5.4%2Clx-commentary-data-paged%2Fabout%2Fe745fc56-51bf-46b5-9b74-f0f529ea4d8e%2FisUk%2Ffalse%2Flimit%2F20%2FnitroKey%2Flx-nitro%2FpageNumber%2F1%2Fversion%2F1.5.4%2Clx-commentary-data-paged%2Fabout%2Fe745fc56-51bf-46b5-9b74-f0f529ea4d8e%2FisUk%2Ffalse%2Flimit%2F20%2FnitroKey%2Flx-nitro%2FpageNumber%2F50%2Fversion%2F1.5.4}?timeout=5batch?t=%2Fdata%2Fbbc-morph-{lx-commentary-data-paged%2Fabout%2Fe745fc56-51bf-46b5-9b74-f0f529ea4d8e%2FisUk%2Ffalse%2Flimit%2F20%2FnitroKey%2Flx-nitro%2FpageNumber%2F0%2Fversion%2F1.5.4%2Clx-commentary-data-paged%2Fabout%2Fe745fc56-51bf-46b5-9b74-f0f529ea4d8e%2FisUk%2Ffalse%2Flimit%2F20%2FnitroKey%2Flx-nitro%2FpageNumber%2F1%2Fversion%2F1.5.4%2Clx-commentary-data-paged%2Fabout%2Fe745fc56-51bf-46b5-9b74-f0f529ea4d8e%2FisUk%2Ffalse%2Flimit%2F20%2FnitroKey%2Flx-nitro%2FpageNumber%2F50%2Fversion%2F1.5.4}?timeout=5")
			const jsonslider = await slider.json();
			for(var i=0;i<jsonslider["payload"][0]["body"]["results"].slice(0,50).length;i++)
  	{
	  	var slide={
	            "News_image": jsonslider["payload"][0]["body"]["results"][i]["image"]["href"],
	            "News_title": jsonslider["payload"][0]["body"]["results"][i]["title"],
	            "News_caption": jsonslider["payload"][0]["body"]["results"][i]["summary"],
	            "News_link": "https://www.bbc.com"+jsonslider["payload"][0]["body"]["results"][i]["url"],
	  	}
	  	slides.push(slide);
	  }
  	this.setState({news: slides});
		}

	componentDidMount() {
    this.slider()
  }

  sortArray=(e,Product_Price)=>{
    if(e==="Plth")
	{
		const sorted=this.state.pro.sort((a,b)=>
		parseFloat(a[Product_Price])-parseFloat(b[Product_Price]))
		this.setState({pro:sorted});
	}
	else if(e==="Phtl")
	{
		const sorted=this.state.pro.sort((a,b)=> 
		parseFloat(b[Product_Price])-parseFloat(a[Product_Price]))
		this.setState({pro:sorted});
	}
	else{
		this.setState({pro: this.state.pro});
	} 
  }
  cancelSearch = () => {
    this.setState({search:""});
  };

  getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}	 


  handlePostQuery= async(query1)=>{
  	const query = this.capitalizeString(query1);
  	this.cancelSearch();
  	var results=[];
  	var websites=[];
  	const croma = await fetch("/api1/product/allchannels/v1/search?currentPage=0&query="+query+"%3Arelevance%3AZAStatusFlag%3Atrue&fields=FULL")
  	const jsoncroma = await croma.json();
  	for(var i=0;i<jsoncroma["products"].slice(0,10).length;i++)
  	{
	  	var crom={
	            "Website_Link": "https://www.croma.com/",
	            "Product_Name": jsoncroma["products"][i]["name"],
	            "Product_Link": "https://www.croma.com"+jsoncroma["products"][i]["url"],
	            "Product_Price": jsoncroma["products"][i]["price"]["value"],
	            "Product_Image": jsoncroma["products"][i]["plpImage"],
	            "Product_Logo": "https://zeevector.com/wp-content/uploads/2021/02/Croma-Logo-Vector.png"
	  	}
	  	results.push(crom);
	  }
	  websites.push({"Source_Link": "https://www.croma.com/search?q="+query,
  						 			"Website_Name": "Croma"});
  	const tata = await fetch("/api2/products/mpl/search/?searchText="+query+"%3Arelevance%3AinStockFlag%3Atrue&isKeywordRedirect=false&isKeywordRedirectEnabled=true&channel=WEB&isMDE=true&isTextSearch=false&isFilter=false&qc=false&test=qcnobypass&page=0&isPwa=true&pageSize=40&typeID=all")
  	
  	const jsontata = await tata.json();
  	for( i=0;i<jsontata["searchresult"].slice(0,10).length;i++)
  	{
  	var tatacliq = {
            "Website_Link": "https://www.tatacliq.com/",
            "Product_Name": jsontata["searchresult"][i]["productname"],
            "Product_Link": "https://www.tatacliq.com"+jsontata["searchresult"][i]["webURL"],
            "Product_Price": jsontata["searchresult"][i]["price"]["sellingPrice"]["doubleValue"],
            "Product_Image": jsontata["searchresult"][i]["imageURL"],
            "Product_Logo": "https://mma.prnewswire.com/media/958758/Tata_CLiQ_Logo.jpg?p=facebook"
  	}
  	results.push(tatacliq);
  }
  websites.push({"Source_Link": "https://www.tatacliq.com/search?q="+query,
  						 			"Website_Name": "TATACLIQ"});
  const pricee = await fetch("/api3/api/v1/search.php?q="+query+"&size=10&lang=en&vuid=0&platform=1")
	const jsonpricee = await pricee.json();
  for(i=0;i<jsonpricee["data"].length;i++)
  	{
  	var priceee = {
            "Website_Link": "https://www."+jsonpricee["data"][i]["source_url"],
            "Product_Name": jsonpricee["data"][i]["title"],
            "Product_Link": jsonpricee["data"][i]["url"],
            "Product_Price": jsonpricee["data"][i]["source_price"].replace(/[.,#!$%&;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," "),
            "Product_Image": jsonpricee["data"][i]["image"],
            "Product_Logo": jsonpricee["data"][i]["source_logo"]
  	}
  	websites.push({"Source_Link": "https://www."+jsonpricee["data"][i]["source_url"]+"/search?q="+query,
  						 			"Website_Name": jsonpricee["data"][i]["source_display_name"]})
  	results.push(priceee);
  }

  	this.setState({value: query});
  	this.setState({pro:results});
  	this.setState({website: this.getUniqueListBy(websites, 'Source_Link')});
 }
 	render(){
	return(
		<>
		<Grid container item className="section mt-1" direction="row" alignItems="center">
		 <Grid item className="section_title" md={3} xs={6} order={{md:1,sm:1}}>
				<h4 className="section_title_text">Smart<span> Search</span></h4>
				<hr />
			</Grid>
			<Grid item md={6} xs={12} order={{md:2,sm:3}}>
				<SearchBar
			      className="search_bar"
			      value={this.state.search}
			      onChange={(newValue) => this.setState({search:newValue})}
			      onRequestSearch={() => this.handlePostQuery(this.state.search)}
			      onCancelSearch={() => this.cancelSearch()}
				    />
			</Grid>
			{this.state.website?
			<Grid item md={2} xs={6} className="sort_grid" order={{md:3,sm:2}}>
				<select name='option' onClick={(e) => this.sortArray(e.target.value,"Product_Price")} className="sort">
						<option value="Featured" className="sort_option">Sort by :  &nbsp;  Featured </option>
				    <option value="Plth" className="sort_option">Sort by : Price Low to High</option>
				    <option value="Phtl"className="sort_option">Sort by : Price High to Low</option>
				</select>
			</Grid>
			: null}
		</Grid>

		{this.state.pro?
		<Grid container className="section1" direction="row" justifycontent="space-around" alignItems="flex-start" >
		 {this.state.website?
		 <Grid item className="website_title d-none d-md-block" xs={12} sm={12} md={2} lg={2}>
				<h5 className="websites">Websites<span> Traced</span></h5>
				<ul className="website_list">
				{Object.keys(this.state.website).map((key,i) => (
     		    <a href={this.state.website[key].Source_Link} key={i} target="_blank" rel="noreferrer"><li>{this.state.website[key].Website_Name}</li></a>
        		))}
        </ul>
		</Grid>
		: null}
		
			<Grid item className="website_title" md xs>
				{this.state.value ? <h5 className="websites">Search results for<span> {this.state.value} ....</span></h5> : <h5 className="websites">Popular<span> Products ....</span></h5> }
				<Grid className="products_list">
				{Object.keys(this.state.pro).map((key,i) => (
   		 <Row container="true" className="product" key={i}>
				<Col md={3}>
					    <LazyLoadImage src={this.state.pro[key].Product_Image} className="product_img" alt=" "/>
				</Col>
				<Col md={8}>
					    <h4 className="product_name">{this.state.pro[key].Product_Name}</h4>
					    <Row className="product_details" justifycontent = 'center'>
					    		<Col md={8} xs={3}>
					    					<div>
					    					<a href={this.state.pro[key].Website_Link} target="_blank" rel="noreferrer"><img src={this.state.pro[key].Product_Logo} className="product_logo" alt=" "/></a>
					    					</div>
					    		</Col>
					    		<Col md={4} xs={5} >
					    					<div className="price">
					    					<h5 className="product_price">₹ {this.state.pro[key].Product_Price}</h5>
					    					</div>
					    		</Col>
					    		<Col md={12} xs={4}>
					    				<div>
										    <Button
										    	target="_blank"
										      href={this.state.pro[key].Product_Link}
									        variant="contained"
									        color="secondary"
									        className="product_btn"
									        startIcon={<ShoppingCart />}>
									        Buy
									      </Button>
									     </div>
						    	</Col>
				    </Row>
				</Col>
				</Row>
             	))}
				</Grid>
			</Grid>
		</Grid>
		:
 		<Grid container className="section1">
						<Grid item className="website_title">
								<h5 className="websites">Latest<span> Tech News</span></h5>
								<hr />
						</Grid>
								<Grid container style={{ display: 'block', padding: 10 }}>
										<Carousel interval= {4000}>
										{Object.keys(this.state.news).map((key,i) => (
											  <Carousel.Item key={i}>
											    <a href={this.state.news[key].News_link} target="_blank" rel="noreferrer">
											    <img
											      className="d-block w-100"
											      src={this.state.news[key].News_image}
											      alt="First slide"
											      style={{height: 500}}
											    /></a>
											    <Carousel.Caption style={{borderRadius : 30, backgroundColor: "black",opacity : 0.8 , display : "table-cell"}}>
											      <h3 style={{color: "red"}} >--- {this.state.news[key].News_title} ---</h3>
											      <p className="d-none d-md-block">{this.state.news[key].News_caption}.</p>
											    </Carousel.Caption>
											  </Carousel.Item>
											  ))}
											</Carousel>
								</Grid>
						</Grid>}
		<Row className='footer ml-0' sm={8}>
			<Col className='footer_right' sm={4}>
				<Typography className='footer_copyright'>
				Designed and Developed by <a href='/' target='_blank'>Ajay Pediredla</a>
				</Typography>
			</Col>
		</Row>
		</>
		);
}
}


export default Smartdeal;