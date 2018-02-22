import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import FontAwesome from 'react-fontawesome';
import './Home.scss';

const Home = (props) => {
    return (
        <div className='HomeWrapper'>
            <div className='HomeImgDiv'>
                <img src="" alt="" />
            </div>
            <div className="HomeGridDiv">
                <Grid container>
                    <Grid item sm={2}>
                        <Button>Electronics</Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button>Tools</Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button>Sports Equip</Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button>Party Supplies</Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button>BBQ</Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button>Clothes</Button>
                    </Grid>
                </Grid>
            </div>
            <div className='CategoryDiv'>
                <Grid container >
                    <Grid item sm={4}>
                        <img src="http://via.placeholder.com/300x300" alt="" />
                    </Grid>
                    <Grid item sm={4}>
                        <img src="http://via.placeholder.com/300x300" alt="" />
                    </Grid>
                    <Grid item sm={4}>
                        <img src="http://via.placeholder.com/300x300" alt="" />
                    </Grid>
                    <Grid item sm={4}>
                        <img src="http://via.placeholder.com/300x300" alt="" />
                    </Grid>
                    <Grid item sm={4}>
                        <img src="http://via.placeholder.com/300x300" alt="" />
                    </Grid>
                    <Grid item sm={4}>
                        <img src="http://via.placeholder.com/300x300" alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className="IntroDiv">
                <Grid container className='IntroWrapper'>
                    <Grid item sm={6}>
                        <h1>"Satisfaction Guaranteed"</h1>
                        <h4>You'll love it</h4>
                        <h4>Short Delivery Time</h4>
                        <h4>Security Deposit covers cost of item</h4>
                        <FontAwesome name='check-square' size='5x'/>
                    </Grid>
                    <Grid item sm={6} className='IntroRight'>
                        <h1>"Fast and Easy Transactions"</h1>
                        <h4>Secure and Fast payments with Paypal</h4>
                        <h4>Blah Blah Blah</h4>
                        <h4>asdfasdfadsfadsfadsf</h4>
                        <FontAwesome name='paypal' size='5x'/>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Home; 