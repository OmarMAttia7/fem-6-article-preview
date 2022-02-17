import React from "react";
import avatarImage from "./images/avatar-michelle.jpg";
import shareIcon from "./images/icon-share.svg";
import shareIcon2 from "./images/icon-share-open.svg";
import fbIcon from "./images/icon-facebook.svg";
import ptIcon from "./images/icon-pinterest.svg";
import twIcon from "./images/icon-twitter.svg";

class ArticleComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            share: false
        }

        this.toggleShare = this.toggleShare.bind(this)
    }

    toggleShare() {
        this.setState({share: !this.state.share})
    } 

    render() {
        let shareButton;
        if(this.state.share){
            shareButton =  <ShareButton shareButtonHandler={this.toggleShare} />; 
        }else{
            shareButton = null;
        }

        return (

        <main className="bg-white w-11/12 my-[10%] grid auto-rows-min rounded-xl
                        md:grid-cols-5 md:w-3/4
                        lg:w-3/5">

            <div className="bg-hero bg-cover h-[17rem] bg-no-repeat rounded-t-xl
                            md:rounded-t-none md:rounded-l-xl md:h-full md:col-span-2"></div>

            <div className="pt-12 pb-2 px-10 relative
                            md:col-span-3">

                <h1 className="text-xl font-bold text-grayblue-300 mb-6
                                md:text-2xl">
                    Shift the overall look and feel by adding these wonderful touches to furniture in your home.
                </h1>
                
                <p className="text-lg font-medium text-darkblue mb-6
                              md:text-xl">
                    Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
                </p>
                
                <AuthorSection shareButtonHandler={this.toggleShare} />

                {shareButton}
              

            </div>

        </main>

    );}
}

function AuthorSection(props) {
    return (
    <div className="flex py-4
                    md:pb-6">

        <a href="#">
            <img className="rounded-full w-[40px] object-contain" src={avatarImage} alt="Michelle Appleton" />
        </a>

        <div className="flex flex-1 flex-col justify-between mx-4">

            <p className="font-bold text-grayblue-300 text-base">Michelle Appleton</p>
            <p className="font-medium text-grayblue-200">28 Jun 2020</p>

        </div>

        <button onClick={props.shareButtonHandler} 
        className="bg-grayblue-100 p-3 rounded-full cursor-pointer self-center">
            <img src={shareIcon} alt="Share icon"/>
        </button>

    </div>
    )
}

class ShareButton extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            easedIn: false
        };
        this.renderAnimation = this.renderAnimation.bind(this);
        this.shareButtonHandler = this.shareButtonHandler.bind(this);
    }

    renderAnimation() {
        this.setState({easedIn: true});
    }

    shareButtonHandler(){
        this.setState({easedIn: false});

        setTimeout(this.props.shareButtonHandler, 150)
    }

    componentDidMount() {
        setTimeout(() => {
            this.renderAnimation()
        }, 10)
    }
    
    
    render(){
        return (
    <div className={`
    flex h-[50px] items-center bg-grayblue-300 text-white justify-between
    absolute bottom-0 left-0 p-10 w-full transition-all rounded-b-xl ${this.state.easedIn? "" : "opacity-0 -translate-y-2/4"}
    md:w-[280px] md:-right-24 md:bottom-[unset] md:top-2/4 md:left-[unset] md:p-10 md:rounded-xl
    md:tooltip md:after:border-t-grayblue-300
    xl:top-[40%]
    `}>

        <div className="flex items-center md:justify-evenly md:w-full">

            <p className="text-grayblue-200 text-xl tracking-[0.3rem] md:text-lg">SHARE</p>
            <a className="ml-4 w-[20px]" href="#"><img src={fbIcon} /></a>
            <a className="ml-4 w-[20px]" href="#"><img src={twIcon} /></a>
            <a className="ml-4 w-[20px]" href="#"><img src={ptIcon} /></a>

        </div>

        <button onClick={this.shareButtonHandler}
        className="bg-darkblue p-3 rounded-full cursor-pointer self-center
                    md:hidden">

            <img src={shareIcon2} alt="Share icon"/>

        </button>

    </div>
    );}
}

export default ArticleComponent;