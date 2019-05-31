import React, { Component } from 'react'

import Icon from 'react-svg-jsx-icons'
import {CountryFlags} from 'react-svg-jsx-icons'

export default class App extends Component {
  render () {
    console.log("country flags ",CountryFlags)
    return (
      <div>
        {
          CountryFlags.map((item,index)=>(
            <div>
            <Icon name={item.Name}  height={'5%'} width={'5%'} />
            <div>{item.Country}</div>
            <div>{item.CountryCode}</div>
            </div>
          ))
        }
        {/* <Icon name={'world'}  fill={'red'}/>
        <Icon name={'wifi'} height={'1.5%'} width ={'1.5%'} color ={'blue'} size={'4%'} fill={'red'} />
        <Icon name={'water'}  size={'5%'} />
        <Icon name={'warning'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />

        <Icon name={'add-contact'} height={'1.5%'} width ={'1.5%'} color ={'blue'} size={'4%'} fill={'red'} />
        <Icon name={'alarm-clock'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'attachment'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'at'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />

        <Icon name={'bar-chart'} height={'1.5%'} width ={'1.5%'} color ={'blue'} size={'4%'} fill={'red'} />
        <Icon name={'black-envelope'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'book'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'building'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />

        <Icon name={'calendar'} height={'1.5%'} width ={'1.5%'} color ={'blue'} size={'4%'} fill={'red'} />
        <Icon name={'chat'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'check'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'checkbook'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'comment'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'cross'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>

        <Icon name={'departure'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'doctor'} height={'5%'} width ={'5%'} color ={'red'}  size={'4%'} />
        <Icon name={'dollar-symbol'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'down-arrow'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'event'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'exclamation'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'eye'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>

        <Icon name={'feedback'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'red'}/>
        <Icon name={'friends'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'full-moon'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'house-black-silhouette-without-door'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'icon'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'information'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'invoice'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'justice'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />

        <Icon name={'leftarrow'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'red'}/>
        <Icon name={'light-bulb'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'line-chart'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'man-standing-with-arms-up'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'megaphone'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'menu'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'mobile'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'new-product'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'paste-file'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'red'}/>
        <Icon name={'phone-receiver'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'plane'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'poll'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'profits'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'reader'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'reflect'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'refresh'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'reload'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'red'}/>
        <Icon name={'restaurant-cutlery'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'restore'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>

        <Icon name={'scale-symbol'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'red'}/>
        <Icon name={'send'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} fill={'pink'}/>
        <Icon name={'star'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'timeline'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'update'} height={'1.5%'} width ={'1.5%'} color ={'red'}  size={'4%'} />
        <Icon name={'view'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'wallet'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>
        <Icon name={'WashingMachine'} height={'1.5%'} width ={'1.5%'} fill={'red'}/>

        <Icon name={'circle'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'double-checking'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'money'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'priority'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'suitcase-with-check-symbol'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'user'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'user-warning'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'chatting'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'justify'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'playlist'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'radar'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'rgb'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'security-on'} height={'1.5%'} width ={'1.5%'} /> */}

{/* 
        <Icon name={'afghanistan'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'albania'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'algeria'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'american-samoa'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'andorra'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'angola'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'anguilla'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'antarctica'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'antigua-and-barbuda'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'argentina'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'armenia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'aruba'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'australia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'austria'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'azerbaijan'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'bahamas'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'bangladesh'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'barbados'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'bahrain'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'belarus'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'belgium'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'belize'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'benin'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'bermuda'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'bhutan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'bolivia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'bosnia-and-herzegovina'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'botswana'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'brazil'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'british-indian-ocean-territory'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'british-virgin-islands'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'brunei'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'bulgaria'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'burkina-faso'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'burundi'} height={'1.5%'} width ={'1.5%'} />

        <Icon name={'cameroon'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'canada'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'cape-verde'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'cayman-islands'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'central-african-republic'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'chad'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'chile'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'china'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'christmas-island'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'cocos-island'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'colombia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'cambodia'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'comoros'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'cook-islands'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'costa-rica'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'croatia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'cuba'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'curacao'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'cyprus'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'czech-republic'} height={'1.5%'} width ={'1.5%'} />

        <Icon name={'democratic-republic-of-congo'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'denmark'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'djibouti'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'dominica'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'dominican-republic'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'east-timor'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'ecuador'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'egypt'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'el-salvador'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'equatorial-guinea'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'eritrea'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'estonia'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'ethiopia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'falkland-islands'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'faroe-islands'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'fiji'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'finland'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'france'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'french-polynesia'} height={'1.5%'} width ={'1.5%'}   />
        

        <Icon name={'gabon'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'gambia'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'georgia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'germany'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'ghana'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'gibraltar'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'greece'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'greenland'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'grenada'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'guam'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'guatemala'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'guernsey'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'guinea'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'guyana'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'guinea-bissau'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'haiti'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'honduras'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'hong-kong'} height={'1.5%'} width ={'1.5%'} />
         <Icon name={'hungary'} height={'1.5%'} width ={'1.5%'} />

        <Icon name={'iceland'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'india'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'indonesia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'iran'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'iraq'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'ireland'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'israel'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'italy'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'ivory-coast'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'jamaica'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'japan'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'jersy'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'jordan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'kazakhstan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'kenya'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'kosovo'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'kuwait'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'kyrgyzstan'} height={'1.5%'} width ={'1.5%'} />


        <Icon name={'laos'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'latvia'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'lebanon'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'lesotho'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'liberia'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'libya'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'liechtenstein'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'lithuania'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'luxembourg'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'macao'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'macedonia'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'madagascar'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'malawi'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'malaysia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'maldives'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'mali'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'malta'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'marshall-island'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'mauritania'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'mauritius'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'mayotte'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'mexico'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'micronesia'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'moldova'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'monaco'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'mongolia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'montenegro'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'montserrat'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'morocco'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'mozambique'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'myanmar'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'namibia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'nauru'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'nepal'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'netherlands'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'new-caledonia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'new-zealand'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'nicaragua'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'niger'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'nigeria'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'niue'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'northern-marianas-islands'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'north-korea'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'norway'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'oman'} height={'1.5%'} width ={'1.5%'} /> */}

{/* 
        <Icon name={'pakistan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'palau'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'palestine'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'panama'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'papua-new-guinea'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'paraguay'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'peru'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'philippines'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'pitcairn-islands'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'poland'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'portugal'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'puerto-rico'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'qatar'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'republic-of-the-congo'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'reunion'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'romania'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'russia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'rwanda'} height={'1.5%'} width ={'1.5%'} /> */}


        {/* <Icon name={'saint-kitts-and-nevis'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'saint-lucia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'saint-pierre-and-miquelon'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'saint-vincent-and-the-grenadines'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'samoa'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'san-marino'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'sao-tome-and-principe'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'saudi-arabia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'senegal'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'serbia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'seychelles'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'sierra-leone'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'singapore'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'sint-maarten'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'slovakia'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'slovenia'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'solomon-islands'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'somalia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'south-africa'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'south-korea'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'south-sudan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'spain'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'sri-lanka'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'sudan'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'suriname'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'swaziland'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'sweden'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'switzerland'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'syria'} height={'1.5%'} width ={'1.5%'} /> 
         */}

         {/* <Icon name={'taiwan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'tajikistan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'tanzania'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'thailand'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'togo'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'tokelau'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'tonga'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'trinidad-and-tobago'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'tunisia'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'turkey'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'turkmenistan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'tuvalu'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'turks-and-caicos'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'uganda'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'ukraine'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'united-arab-emirates'} height={'1.5%'} width ={'1.5%'}  />
        <Icon name={'united-kindom'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'united-states-of-america'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'uruguay'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'uzbekistan'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'vanautu'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'vatican-city'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'venezuela'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'vietnam'} height={'1.5%'} width ={'1.5%'}   />
        <Icon name={'wallis-and-futuna'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'western-sahara'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'yemen'} height={'1.5%'} width ={'1.5%'} />
        <Icon name={'zambia'} height={'1.5%'} width ={'1.5%'}    />
        <Icon name={'zimbabwe'} height={'1.5%'} width ={'1.5%'} /> 
         */}
      </div>
    )
  }
}
