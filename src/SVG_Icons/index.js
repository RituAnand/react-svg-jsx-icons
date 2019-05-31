import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wifi from './JSX_Icons/wifi'
import World from './JSX_Icons/world'
import Warning from './JSX_Icons/warning'
import Water from './JSX_Icons/water'
import Blur from './JSX_Icons/blur'
import At from './JSX_Icons/at'
import Attachment from './JSX_Icons/attachment'
import AddContact from './JSX_Icons/add-contact'
import AlarmClock from './JSX_Icons/alarm-clock'
import BarChart from './JSX_Icons/bar-chart'
import BlackEnvelope from './JSX_Icons/black-envelope'
import Book from './JSX_Icons/book'
import Building from './JSX_Icons/building'
import Calendar from './JSX_Icons/calendar'
import Chat from './JSX_Icons/chat'
import Check from './JSX_Icons/check'
import CheckBook from './JSX_Icons/checkbook'
import Comment from './JSX_Icons/comment'
import Cross from './JSX_Icons/cross'
import Departure from './JSX_Icons/departure'
import Doctor from './JSX_Icons/doctor'
import DollarSymbol from './JSX_Icons/dollar-symbol'
import DownArrow from './JSX_Icons/down-arrow'
import Event from './JSX_Icons/event'
import Exclamation from './JSX_Icons/exclamation'
import Eye from './JSX_Icons/eye'
import FeedBack from './JSX_Icons/feedback'
import Friends from './JSX_Icons/friends'
import FullMoon from './JSX_Icons/full-moon'
import HouseBlack from './JSX_Icons/house-black-silhouette-without-door'
import Icon from './JSX_Icons/icon'
import Information from './JSX_Icons/information'
import InVoice from './JSX_Icons/invoice'
import Justice from './JSX_Icons/justice'
import LeftArrow from './JSX_Icons/leftarrow'
import LightBulb from './JSX_Icons/light-bulb'
import LineChart from './JSX_Icons/line-chart'
import ManStandArmsUp from './JSX_Icons/man-standing-with-arms-up'
import MegaPhone from './JSX_Icons/megaphone'
import Menu from './JSX_Icons/menu'
import Mobile from './JSX_Icons/mobile'
import NewProduct from './JSX_Icons/new-product'
import PasteFile from './JSX_Icons/paste-file'
import PhoneReceiver from './JSX_Icons/phone-receiver'
import Plane from './JSX_Icons/plane'
import Poll from './JSX_Icons/poll'
import Profits from './JSX_Icons/profits'
import Reader from './JSX_Icons/reader'
import Reflect from './JSX_Icons/reflect'
import Refresh from './JSX_Icons/refresh'
import Relaod from './JSX_Icons/reload'
import Restaurant from './JSX_Icons/restaurant-cutlery'
import Restore from './JSX_Icons/restore'
import ScaleSymbol from './JSX_Icons/scale-symbol'
import Send from './JSX_Icons/send'
import Star from './JSX_Icons/star'
import StopWatch from './JSX_Icons/stopwatch'
import Stop from './JSX_Icons/stop'
import TimeLine from './JSX_Icons/timeline'
import Update from './JSX_Icons/update'
import View from './JSX_Icons/view'
import Wallet from './JSX_Icons/wallet'
import WashingMachine from './JSX_Icons/washingmachine'
import Circle from './JSX_Icons/circle'
import DoubleCheck from './JSX_Icons/double-checking'
import Money from './JSX_Icons/money'
import Priority from './JSX_Icons/priority'
import SuitCaseCheck from './JSX_Icons/suitcase-with-check-symbol'
import User from './JSX_Icons/user'
import UserWarning from './JSX_Icons/user-warning'
import Chatting from './JSX_Icons/chatting'
import Justify from './JSX_Icons/justify'
import PlayList from './JSX_Icons/playlist'
import Radar from './JSX_Icons/radar'
import RGB from './JSX_Icons/rgb'
import SecurityOn from './JSX_Icons/security-on'
import Afganistan from './FlagIcons/afghanistan'
import Albania from './FlagIcons/albania'
import Algeria from './FlagIcons/algeria'
import AmericanSamoa from './FlagIcons/american-samoa'
import Andorra from './FlagIcons/andorra'
import Angola from './FlagIcons/angola'
import Anguilla from './FlagIcons/anguilla'
import Antarctica from './FlagIcons/antarctica'
import AntiguaAndBarbuda from './FlagIcons/antigua-and-barbuda'
import Argentina from './FlagIcons/argentina'
import Armenia from './FlagIcons/armenia'
import Aruba from './FlagIcons/aruba'
import Australia from './FlagIcons/australia'
import Austria from './FlagIcons/austria'
import Azerbaijan from './FlagIcons/azerbaijan'
import Bahamas from './FlagIcons/bahamas'
import Bangladesh from './FlagIcons/bangladesh'
import Barbados from './FlagIcons/barbados'
import Bahrain from './FlagIcons/bahrain'
import Belarus from './FlagIcons/belarus'
import Belgium from './FlagIcons/belgium'
import Belize from './FlagIcons/belize'
import Benin from './FlagIcons/benin'
import Bermuda from './FlagIcons/bermuda'
import Bhutan from './FlagIcons/bhutan'
import Bolivia from './FlagIcons/bolivia'
import BosniaAndHerzegovina from './FlagIcons/bosnia-and-herzegovina'
import Botswana from './FlagIcons/botswana'
import Brazil from './FlagIcons/brazil'
import BritishIndianOceanTerritory from './FlagIcons/british-indian-ocean-territory'
import BritishVirginIslands from './FlagIcons/british-virgin-islands'
import Brunei from './FlagIcons/brunei'
import Bulgaria from './FlagIcons/bulgaria'
import BurkinaFaso from './FlagIcons/burkina-faso'
import Burundi from './FlagIcons/burundi'
import Cameroon from './FlagIcons/cameroon'
import Canada from './FlagIcons/canada'
import CapeVerde from './FlagIcons/cape-verde'
import CaymanIslands from './FlagIcons/cayman-islands'
import CentralAfricanRepublic from './FlagIcons/central-african-republic'
import Chad from './FlagIcons/chad'
import Chile from './FlagIcons/chile'
import China from './FlagIcons/china'
import ChristmasIsland from './FlagIcons/christmas-island'
import CocosIsland from './FlagIcons/cocos-island'
import Colombia from './FlagIcons/colombia'
import Cambodia from './FlagIcons/cambodia'
import Comoros from './FlagIcons/comoros'
import CookIslands from './FlagIcons/cook-islands'
import CostaRica from './FlagIcons/costa-rica'
import Croatia from './FlagIcons/croatia'
import Cuba from './FlagIcons/cuba'
import Curacao from './FlagIcons/curacao'
import Cyprus from './FlagIcons/cyprus'
import CzechRepublic from './FlagIcons/czech-republic'

import DemocraticRepublicOfCongo from './FlagIcons/democratic-republic-of-congo'
import Denmark from './FlagIcons/denmark'
import Djibouti from './FlagIcons/djibouti'
import Dominica from './FlagIcons/dominica'
import DominicanRepublic from './FlagIcons/dominican-republic'
import EastTimor from './FlagIcons/east-timor'
import Ecuador from './FlagIcons/ecuador'
import Egypt from './FlagIcons/egypt'
import ElSalvador from './FlagIcons/el-salvador'
import EquatorialGuinea from './FlagIcons/equatorial-guinea'
import Eritrea from './FlagIcons/eritrea'
import Estonia from './FlagIcons/estonia'
import Ethiopia from './FlagIcons/ethiopia'
import FalklandIslands from './FlagIcons/falkland-islands'
import FaroeIslands from './FlagIcons/faroe-islands'
import Fiji from './FlagIcons/fiji'
import Finland from './FlagIcons/finland'
import France from './FlagIcons/france'
import FrenchPolynesia from './FlagIcons/french-polynesia'

import Gabon from './FlagIcons/gabon'
import Gambia from './FlagIcons/gambia'
import Georgia from './FlagIcons/georgia'
import Germany from './FlagIcons/germany'
import Ghana from './FlagIcons/ghana'
import Gibraltar from './FlagIcons/gibraltar'
import Greece from './FlagIcons/greece'
import GreenLand from './FlagIcons/greenland'
import Grenada from './FlagIcons/grenada'
import Guam from './FlagIcons/guam'
import Guatemala from './FlagIcons/guatemala'
import Guernsey from './FlagIcons/guernsey'
import GuineaBissau from './FlagIcons/guinea-bissau'
import Guinea from './FlagIcons/guinea'
import Guyana from './FlagIcons/guyana'
import Haiti from './FlagIcons/haiti'
import Honduras from './FlagIcons/honduras'
import HongKong from './FlagIcons/hong-kong'
import Hungary from './FlagIcons/hungary'
import IceLand from './FlagIcons/iceland'
import India from './FlagIcons/india'
import Indonesia from './FlagIcons/indonesia'
import Iran from './FlagIcons/iran'
import Iraq from './FlagIcons/iraq'
import Ireland from './FlagIcons/ireland'
import Israel from './FlagIcons/israel'
import Italy from './FlagIcons/italy'
import IvoryCoast from './FlagIcons/ivory-coast'
import Jamaica from './FlagIcons/jamaica'
import Japan from './FlagIcons/japan'
import Jersey from './FlagIcons/jersy'
import Jordan from './FlagIcons/jordan'
import Kazakhstan from './FlagIcons/kazakhstan'
import Kenya from './FlagIcons/kenya'
import Kosovo from './FlagIcons/kosovo'
import Kuwait from './FlagIcons/kuwait'
import Kyrgyzstan from './FlagIcons/kyrgyzstan'
import Laos from './FlagIcons/laos'
import Latvia from './FlagIcons/latvia'
import Lebanon from './FlagIcons/lebanon'
import Lesotho from './FlagIcons/lesotho'
import Liberia from './FlagIcons/liberia'
import Libya from './FlagIcons/libya'
import Liechtenstein from './FlagIcons/liechtenstein'
import Lithuania from './FlagIcons/lithuania'
import Luxembourg from './FlagIcons/luxembourg'
import Macao from './FlagIcons/macao'
import Macedonia from './FlagIcons/macedonia'
import Madagascar from './FlagIcons/madagascar'
import Malawi from './FlagIcons/malawi'
import Malaysia from './FlagIcons/malaysia'
import Maldives from './FlagIcons/maldives'
import Mali from './FlagIcons/mali'
import Malta from './FlagIcons/malta'
import MarshallIslands from './FlagIcons/marshall-island'
import Mauritania from './FlagIcons/mauritania'
import Mauritius from './FlagIcons/mauritius'
import Mayotte from './FlagIcons/mayotte'
import Mexico from './FlagIcons/mexico'
import Micronesia from './FlagIcons/micronesia'
import Moldova from './FlagIcons/moldova'
import Monaco from './FlagIcons/monaco'
import Mongolia from './FlagIcons/mongolia'
import Montenegro from './FlagIcons/montenegro'
import Montserrat from './FlagIcons/montserrat'
import Morocco from './FlagIcons/morocco'
import Mozambique from './FlagIcons/mozambique'
import Myanmar from './FlagIcons/myanmar'
import Namibia from './FlagIcons/namibia'
import Nauru from './FlagIcons/nauru'
import Nepal from './FlagIcons/nepal'
import Netherlands from './FlagIcons/netherlands'
import NewCaledonia from './FlagIcons/new-caledonia'
import NewZealand from './FlagIcons/new-zealand'
import Nicaragua from './FlagIcons/nicaragua'
import Niger from './FlagIcons/niger'
import Nigeria from './FlagIcons/nigeria'

import Niue from './FlagIcons/niue'
import NorthKorea from './FlagIcons/north-korea'
import NorthernMarianasIsland from './FlagIcons/northern-marianas-islands'
import Norway from './FlagIcons/norway'
import Oman from './FlagIcons/oman'

import Pakistan from './FlagIcons/pakistan'
import Palau from './FlagIcons/palau'
import Palestine from './FlagIcons/palestine'
import Panama from './FlagIcons/panama'
import PapuaNewGuinea from './FlagIcons/papua-new-guinea'
import Paraguay from './FlagIcons/paraguay'
import Peru from './FlagIcons/peru'
import Philippines from './FlagIcons/philippines'
import PitcairnIslands from './FlagIcons/pitcairn-islands'
import Poland from './FlagIcons/poland'
import Portugal from './FlagIcons/portugal'
import PuertoRico from './FlagIcons/puerto-rico'
import Qatar from './FlagIcons/qatar'
import RepublicOfTheCongo from './FlagIcons/republic-of-the-congo'
import Reunion from './FlagIcons/reunion'
import Romania from './FlagIcons/romania'
import Russia from './FlagIcons/russia'
import Rwanda from './FlagIcons/rwanda'
import SainKittsAndNevis from './FlagIcons/saint-kitts-and-nevis'
import SaintLucia from './FlagIcons/saint-lucia'
import SaintPierreAndMiquelon from './FlagIcons/saint-pierre-and-miquelon'
import SaintVincentAndGrenadines from './FlagIcons/saint-vincent-and-the-grenadines'
import Samoa from './FlagIcons/samoa'
import SanMarino from './FlagIcons/san-marino'
import SaoTomeAndPrincipe from './FlagIcons/sao-tome-and-principe'
import SaudiArabia from './FlagIcons/saudi-arabia'
import Senegal from './FlagIcons/senegal'
import Serbia from './FlagIcons/serbia'
import Seychelles from './FlagIcons/seychelles'
import SierraLeone from './FlagIcons/sierra-leone'
import Singapore from './FlagIcons/singapore'
import SintMaarten from './FlagIcons/sint-maarten'
import Slovakia from './FlagIcons/slovakia'
import Slovenia from './FlagIcons/slovenia'
import SolomonIslands from './FlagIcons/solomon-islands'
import Somalia from './FlagIcons/somalia'
import SouthAfrica from './FlagIcons/south-africa'
import SouthKorea from './FlagIcons/south-korea'
import SouthSudan from './FlagIcons/south-sudan'
import Spain from './FlagIcons/spain'
import SriLanka from './FlagIcons/sri-lanka'
import Sudan from './FlagIcons/sudan'
import Suriname from './FlagIcons/suriname'
import Swaziland from './FlagIcons/swaziland'
import Sweden from './FlagIcons/sweden'
import Switzerland from './FlagIcons/switzerland'
import Syria from './FlagIcons/syria'
import Taiwan from './FlagIcons/taiwan'
import Tajikistan from './FlagIcons/tajikistan'
import Tanzania from './FlagIcons/tanzania'
import Thailand from './FlagIcons/thailand'
import Togo from './FlagIcons/togo'
import Tokelau from './FlagIcons/tokelau'
import Tonga from './FlagIcons/tonga'
import TrinidadAndTobago from './FlagIcons/trinidad-and-tobago'
import Tunisia from './FlagIcons/tunisia'
import Turkey from './FlagIcons/turkey'
import Turkmenistan from './FlagIcons/turkmenistan'
import TurksAndCaicos from './FlagIcons/turks-and-caicos'
import Tuvalu from './FlagIcons/tuvalu'
import Uganda from './FlagIcons/uganda'
import Ukraine from './FlagIcons/ukraine'
import UnitedArabEmirates from './FlagIcons/united-arab-emirates'
import UnitedKingdon from './FlagIcons/united-kindom'
import UnitesStatesOfAmerica from './FlagIcons/united-states-of-america'
import Uruguay from './FlagIcons/uruguay'
import Uzbekistan from './FlagIcons/uzbekistan'
import Vanautu from './FlagIcons/vanautu'
import VaticanCity from './FlagIcons/vatican-city'
import Venezuela from './FlagIcons/venezuela'
import Vietnam from './FlagIcons/vietnam'
import WallisAndFutuna from './FlagIcons/wallis-and-futuna'
import WesternSahara from './FlagIcons/western-sahara'
import Yemen from './FlagIcons/yemen'
import Zambia from './FlagIcons/zambia'
import Zimbabwe from './FlagIcons/zimbabwe'

export default class ReturnSvgIcon extends Component {
    static propTypes = {
      name: PropTypes.string,
      height: PropTypes.string,
      width: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.string,
      fill: PropTypes.string
    }

    render () {
      const name = this.props.name ? this.props.name : 'blur'
      const height = this.props.height ? this.props.height : '1.5%'
      const width = this.props.width ? this.props.width : '1.5%'
      const color = this.props.color ? this.props.color : 'black'
      const size = this.props.size ? this.props.size : '5%'
      const fill = this.props.fill ? this.props.fill : 'black'

      switch (name) {
        case 'world':
          return (<World height={height} width={width} color={color} size={size} fill={fill} />)
        case 'wifi':
          return (<Wifi height={height} width={width} color={color} size={size} fill={fill} />)
        case 'warning':
          return (<Warning height={height} width={width} color={color} size={size} fill={fill} />)
        case 'water':
          return (<Water height={height} width={width} color={color} size={size} fill={fill} />)
        case 'stopwatch':
          return (<StopWatch height={height} width={width} color={color} size={size} fill={fill} />)
        case 'stop':
          return (<Stop height={height} width={width} color={color} size={size} fill={fill} />)
        case 'at':
          return (<At height={height} width={width} color={color} size={size} fill={fill} />)
        case 'attachment':
          return (<Attachment height={height} width={width} color={color} size={size} fill={fill} />)
        case 'add-contact':
          return (<AddContact height={height} width={width} color={color} size={size} fill={fill} />)
        case 'alarm-clock':
          return (<AlarmClock height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bar-chart':
          return (<BarChart height={height} width={width} color={color} size={size} fill={fill} />)
        case 'black-envelope':
          return (<BlackEnvelope height={height} width={width} color={color} size={size} fill={fill} />)
        case 'book':
          return (<Book height={height} width={width} color={color} size={size} fill={fill} />)
        case 'building':
          return (<Building height={height} width={width} color={color} size={size} fill={fill} />)
        case 'calendar':
          return (<Calendar height={height} width={width} color={color} size={size} fill={fill} />)
        case 'chat':
          return (<Chat height={height} width={width} color={color} size={size} fill={fill} />)
        case 'check':
          return (<Check height={height} width={width} color={color} size={size} fill={fill} />)
        case 'checkbook':
          return (<CheckBook height={height} width={width} color={color} size={size} fill={fill} />)
        case 'comment':
          return (<Comment height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cross':
          return (<Cross height={height} width={width} color={color} size={size} fill={fill} />)
        case 'departure':
          return (<Departure height={height} width={width} color={color} size={size} fill={fill} />)
        case 'doctor':
          return (<Doctor height={height} width={width} color={color} size={size} fill={fill} />)
        case 'dollar-symbol':
          return (<DollarSymbol height={height} width={width} color={color} size={size} fill={fill} />)
        case 'down-arrow':
          return (<DownArrow height={height} width={width} color={color} size={size} fill={fill} />)
        case 'event':
          return (<Event height={height} width={width} color={color} size={size} fill={fill} />)
        case 'exclamation':
          return (<Exclamation height={height} width={width} color={color} size={size} fill={fill} />)
        case 'eye':
          return (<Eye height={height} width={width} color={color} size={size} fill={fill} />)
        case 'feedback':
          return (<FeedBack height={height} width={width} color={color} size={size} fill={fill} />)
        case 'friends':
          return (<Friends height={height} width={width} color={color} size={size} fill={fill} />)
        case 'full-moon':
          return (<FullMoon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'house-black-silhouette-without-door':
          return (<HouseBlack height={height} width={width} color={color} size={size} fill={fill} />)
        case 'icon':
          return (<Icon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'information':
          return (<Information height={height} width={width} color={color} size={size} fill={fill} />)
        case 'invoice':
          return (<InVoice height={height} width={width} color={color} size={size} fill={fill} />)
        case 'justice':
          return (<Justice height={height} width={width} color={color} size={size} fill={fill} />)
        case 'leftarrow':
          return (<LeftArrow height={height} width={width} color={color} size={size} fill={fill} />)
        case 'light-bulb':
          return (<LightBulb height={height} width={width} color={color} size={size} fill={fill} />)
        case 'line-chart':
          return (<LineChart height={height} width={width} color={color} size={size} fill={fill} />)
        case 'man-standing-with-arms-up':
          return (<ManStandArmsUp height={height} width={width} color={color} size={size} fill={fill} />)
        case 'megaphone':
          return (<MegaPhone height={height} width={width} color={color} size={size} fill={fill} />)
        case 'menu':
          return (<Menu height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mobile':
          return (<Mobile height={height} width={width} color={color} size={size} fill={fill} />)
        case 'new-product':
          return (<NewProduct height={height} width={width} color={color} size={size} fill={fill} />)
        case 'paste-file':
          return (<PasteFile height={height} width={width} color={color} size={size} fill={fill} />)
        case 'phone-receiver':
          return (<PhoneReceiver height={height} width={width} color={color} size={size} fill={fill} />)
        case 'plane':
          return (<Plane height={height} width={width} color={color} size={size} fill={fill} />)
        case 'poll':
          return (<Poll height={height} width={width} color={color} size={size} fill={fill} />)
        case 'profits':
          return (<Profits height={height} width={width} color={color} size={size} fill={fill} />)
        case 'reader':
          return (<Reader height={height} width={width} color={color} size={size} fill={fill} />)
        case 'reflect':
          return (<Reflect height={height} width={width} color={color} size={size} fill={fill} />)
        case 'refresh':
          return (<Refresh height={height} width={width} color={color} size={size} fill={fill} />)
        case 'reload':
          return (<Relaod height={height} width={width} color={color} size={size} fill={fill} />)
        case 'restaurant-cutlery':
          return (<Restaurant height={height} width={width} color={color} size={size} fill={fill} />)
        case 'restore':
          return (<Restore height={height} width={width} color={color} size={size} fill={fill} />)
        case 'scale-symbol':
          return (<ScaleSymbol height={height} width={width} color={color} size={size} fill={fill} />)
        case 'send':
          return (<Send height={height} width={width} color={color} size={size} fill={fill} />)
        case 'star':
          return (<Star height={height} width={width} color={color} size={size} fill={fill} />)
        case 'timeline':
          return (<TimeLine height={height} width={width} color={color} size={size} fill={fill} />)
        case 'update':
          return (<Update height={height} width={width} color={color} size={size} fill={fill} />)
        case 'view':
          return (<View height={height} width={width} color={color} size={size} fill={fill} />)
        case 'wallet':
          return (<Wallet height={height} width={width} color={color} size={size} fill={fill} />)
        case 'WashingMachine':
          return (<WashingMachine height={height} width={width} color={color} size={size} fill={fill} />)
        case 'circle':
          return (<Circle height={height} width={width} color={color} size={size} fill={fill} />)
        case 'double-checking':
          return (<DoubleCheck height={height} width={width} color={color} size={size} fill={fill} />)
        case 'money':
          return (<Money height={height} width={width} color={color} size={size} fill={fill} />)
        case 'priority':
          return (<Priority height={height} width={width} color={color} size={size} fill={fill} />)
        case 'suitcase-with-check-symbol':
          return (<SuitCaseCheck height={height} width={width} color={color} size={size} fill={fill} />)
        case 'user':
          return (<User height={height} width={width} color={color} size={size} fill={fill} />)
        case 'chatting':
          return (<Chatting height={height} width={width} color={color} size={size} fill={fill} />)
        case 'justify':
          return (<Justify height={height} width={width} color={color} size={size} fill={fill} />)
        case 'playlist':
          return (<PlayList height={height} width={width} color={color} size={size} fill={fill} />)
        case 'radar':
          return (<Radar height={height} width={width} color={color} size={size} fill={fill} />)
        case 'rgb':
          return (<RGB height={height} width={width} color={color} size={size} fill={fill} />)
        case 'security-on':
          return (<SecurityOn height={height} width={width} color={color} size={size} fill={fill} />)
        case 'user-warning':
          return (<UserWarning height={height} width={width} color={color} size={size} fill={fill} />)

        case 'afghanistan':
          return (<Afganistan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'albania':
          return (<Albania height={height} width={width} color={color} size={size} fill={fill} />)
        case 'algeria':
          return (<Algeria height={height} width={width} color={color} size={size} fill={fill} />)
        case 'american-samoa':
          return (<AmericanSamoa height={height} width={width} color={color} size={size} fill={fill} />)
        case 'andorra':
          return (<Andorra height={height} width={width} color={color} size={size} fill={fill} />)
        case 'angola':
          return (<Angola height={height} width={width} color={color} size={size} fill={fill} />)
        case 'anguilla':
          return (<Anguilla height={height} width={width} color={color} size={size} fill={fill} />)
        case 'antarctica':
          return (<Antarctica height={height} width={width} color={color} size={size} fill={fill} />)
        case 'antigua-and-barbuda':
          return (<AntiguaAndBarbuda height={height} width={width} color={color} size={size} fill={fill} />)
        case 'argentina':
          return (<Argentina height={height} width={width} color={color} size={size} fill={fill} />)
        case 'armenia':
          return (<Armenia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'aruba':
          return (<Aruba height={height} width={width} color={color} size={size} fill={fill} />)
        case 'australia':
          return (<Australia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'austria':
          return (<Austria height={height} width={width} color={color} size={size} fill={fill} />)
        case 'azerbaijan':
          return (<Azerbaijan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bahamas':
          return (<Bahamas height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bangladesh':
          return (<Bangladesh height={height} width={width} color={color} size={size} fill={fill} />)
        case 'barbados':
          return (<Barbados height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bahrain':
          return (<Bahrain height={height} width={width} color={color} size={size} fill={fill} />)
        case 'belarus':
          return (<Belarus height={height} width={width} color={color} size={size} fill={fill} />)
        case 'belgium':
          return (<Belgium height={height} width={width} color={color} size={size} fill={fill} />)
        case 'belize':
          return (<Belize height={height} width={width} color={color} size={size} fill={fill} />)
        case 'benin':
          return (<Benin height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bermuda':
          return (<Bermuda height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bhutan':
          return (<Bhutan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bolivia':
          return (<Bolivia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bosnia-and-herzegovina':
          return (<BosniaAndHerzegovina height={height} width={width} color={color} size={size} fill={fill} />)
        case 'botswana':
          return (<Botswana height={height} width={width} color={color} size={size} fill={fill} />)
        case 'brazil':
          return (<Brazil height={height} width={width} color={color} size={size} fill={fill} />)
        case 'british-indian-ocean-territory':
          return (<BritishIndianOceanTerritory height={height} width={width} color={color} size={size} fill={fill} />)
        case 'british-virgin-islands':
          return (<BritishVirginIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'brunei':
          return (<Brunei height={height} width={width} color={color} size={size} fill={fill} />)
        case 'bulgaria':
          return (<Bulgaria height={height} width={width} color={color} size={size} fill={fill} />)
        case 'burkina-faso':
          return (<BurkinaFaso height={height} width={width} color={color} size={size} fill={fill} />)
        case 'burundi':
          return (<Burundi height={height} width={width} color={color} size={size} fill={fill} />)

        case 'cameroon':
          return (<Cameroon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'canada':
          return (<Canada height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cape-verde':
          return (<CapeVerde height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cayman-islands':
          return (<CaymanIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'central-african-republic':
          return (<CentralAfricanRepublic height={height} width={width} color={color} size={size} fill={fill} />)
        case 'chad':
          return (<Chad height={height} width={width} color={color} size={size} fill={fill} />)
        case 'chile':
          return (<Chile height={height} width={width} color={color} size={size} fill={fill} />)
        case 'china':
          return (<China height={height} width={width} color={color} size={size} fill={fill} />)
        case 'christmas-island':
          return (<ChristmasIsland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cocos-island':
          return (<CocosIsland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'colombia':
          return (<Colombia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cambodia':
          return (<Cambodia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'comoros':
          return (<Comoros height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cook-islands':
          return (<CookIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'costa-rica':
          return (<CostaRica height={height} width={width} color={color} size={size} fill={fill} />)
        case 'croatia':
          return (<Croatia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cuba':
          return (<Cuba height={height} width={width} color={color} size={size} fill={fill} />)
        case 'curacao':
          return (<Curacao height={height} width={width} color={color} size={size} fill={fill} />)
        case 'cyprus':
          return (<Cyprus height={height} width={width} color={color} size={size} fill={fill} />)
        case 'czech-republic':
          return (<CzechRepublic height={height} width={width} color={color} size={size} fill={fill} />)

        case 'democratic-republic-of-congo':
          return (<DemocraticRepublicOfCongo height={height} width={width} color={color} size={size} fill={fill} />)
        case 'denmark':
          return (<Denmark height={height} width={width} color={color} size={size} fill={fill} />)
        case 'djibouti':
          return (<Djibouti height={height} width={width} color={color} size={size} fill={fill} />)
        case 'dominica':
          return (<Dominica height={height} width={width} color={color} size={size} fill={fill} />)
        case 'dominican-republic':
          return (<DominicanRepublic height={height} width={width} color={color} size={size} fill={fill} />)
        case 'east-timor':
          return (<EastTimor height={height} width={width} color={color} size={size} fill={fill} />)
        case 'ecuador':
          return (<Ecuador height={height} width={width} color={color} size={size} fill={fill} />)
        case 'egypt':
          return (<Egypt height={height} width={width} color={color} size={size} fill={fill} />)
        case 'el-salvador':
          return (<ElSalvador height={height} width={width} color={color} size={size} fill={fill} />)
        case 'equatorial-guinea':
          return (<EquatorialGuinea height={height} width={width} color={color} size={size} fill={fill} />)
        case 'eritrea':
          return (<Eritrea height={height} width={width} color={color} size={size} fill={fill} />)
        case 'estonia':
          return (<Estonia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'ethiopia':
          return (<Ethiopia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'falkland-islands':
          return (<FalklandIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'faroe-islands':
          return (<FaroeIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'fiji':
          return (<Fiji height={height} width={width} color={color} size={size} fill={fill} />)
        case 'finland':
          return (<Finland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'france':
          return (<France height={height} width={width} color={color} size={size} fill={fill} />)
        case 'french-polynesia':
          return (<FrenchPolynesia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'gabon':
          return (<Gabon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'gambia':
          return (<Gambia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'georgia':
          return (<Georgia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'germany':
          return (<Germany height={height} width={width} color={color} size={size} fill={fill} />)
        case 'ghana':
          return (<Ghana height={height} width={width} color={color} size={size} fill={fill} />)
        case 'gibraltar':
          return (<Gibraltar height={height} width={width} color={color} size={size} fill={fill} />)
        case 'greece':
          return (<Greece height={height} width={width} color={color} size={size} fill={fill} />)
        case 'greenland':
          return (<GreenLand height={height} width={width} color={color} size={size} fill={fill} />)
        case 'grenada':
          return (<Grenada height={height} width={width} color={color} size={size} fill={fill} />)
        case 'guam':
          return (<Guam height={height} width={width} color={color} size={size} fill={fill} />)
        case 'guatemala':
          return (<Guatemala height={height} width={width} color={color} size={size} fill={fill} />)
        case 'guernsey':
          return (<Guernsey height={height} width={width} color={color} size={size} fill={fill} />)
        case 'guinea':
          return (<Guinea height={height} width={width} color={color} size={size} fill={fill} />)
        case 'guyana':
          return (<Guyana height={height} width={width} color={color} size={size} fill={fill} />)
        case 'guinea-bissau':
          return (<GuineaBissau height={height} width={width} color={color} size={size} fill={fill} />)
        case 'haiti':
          return (<Haiti height={height} width={width} color={color} size={size} fill={fill} />)
        case 'honduras':
          return (<Honduras height={height} width={width} color={color} size={size} fill={fill} />)
        case 'hong-kong':
          return (<HongKong height={height} width={width} color={color} size={size} fill={fill} />)
        case 'hungary':
          return (<Hungary height={height} width={width} color={color} size={size} fill={fill} />)

        case 'iceland':
          return (<IceLand height={height} width={width} color={color} size={size} fill={fill} />)
        case 'india':
          return (<India height={height} width={width} color={color} size={size} fill={fill} />)
        case 'indonesia':
          return (<Indonesia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'iran':
          return (<Iran height={height} width={width} color={color} size={size} fill={fill} />)
        case 'iraq':
          return (<Iraq height={height} width={width} color={color} size={size} fill={fill} />)
        case 'ireland':
          return (<Ireland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'israel':
          return (<Israel height={height} width={width} color={color} size={size} fill={fill} />)
        case 'italy':
          return (<Italy height={height} width={width} color={color} size={size} fill={fill} />)
        case 'ivory-coast':
          return (<IvoryCoast height={height} width={width} color={color} size={size} fill={fill} />)
        case 'jamaica':
          return (<Jamaica height={height} width={width} color={color} size={size} fill={fill} />)
        case 'japan':
          return (<Japan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'jersy':
          return (<Jersey height={height} width={width} color={color} size={size} fill={fill} />)
        case 'jordan':
          return (<Jordan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'kazakhstan':
          return (<Kazakhstan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'kenya':
          return (<Kenya height={height} width={width} color={color} size={size} fill={fill} />)
        case 'kosovo':
          return (<Kosovo height={height} width={width} color={color} size={size} fill={fill} />)
        case 'kuwait':
          return (<Kuwait height={height} width={width} color={color} size={size} fill={fill} />)
        case 'kyrgyzstan':
          return (<Kyrgyzstan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'laos':
          return (<Laos height={height} width={width} color={color} size={size} fill={fill} />)
        case 'latvia':
          return (<Latvia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'lebanon':
          return (<Lebanon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'lesotho':
          return (<Lesotho height={height} width={width} color={color} size={size} fill={fill} />)
        case 'liberia':
          return (<Liberia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'libya':
          return (<Libya height={height} width={width} color={color} size={size} fill={fill} />)
        case 'liechtenstein':
          return (<Liechtenstein height={height} width={width} color={color} size={size} fill={fill} />)
        case 'lithuania':
          return (<Lithuania height={height} width={width} color={color} size={size} fill={fill} />)
        case 'luxembourg':
          return (<Luxembourg height={height} width={width} color={color} size={size} fill={fill} />)
        case 'macao':
          return (<Macao height={height} width={width} color={color} size={size} fill={fill} />)
        case 'macedonia':
          return (<Macedonia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'madagascar':
          return (<Madagascar height={height} width={width} color={color} size={size} fill={fill} />)
        case 'malawi':
          return (<Malawi height={height} width={width} color={color} size={size} fill={fill} />)
        case 'malaysia':
          return (<Malaysia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'maldives':
          return (<Maldives height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mali':
          return (<Mali height={height} width={width} color={color} size={size} fill={fill} />)
        case 'malta':
          return (<Malta height={height} width={width} color={color} size={size} fill={fill} />)
        case 'marshall-island':
          return (<MarshallIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mauritania':
          return (<Mauritania height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mauritius':
          return (<Mauritius height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mayotte':
          return (<Mayotte height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mexico':
          return (<Mexico height={height} width={width} color={color} size={size} fill={fill} />)
        case 'micronesia':
          return (<Micronesia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'moldova':
          return (<Moldova height={height} width={width} color={color} size={size} fill={fill} />)
        case 'monaco':
          return (<Monaco height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mongolia':
          return (<Mongolia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'montenegro':
          return (<Montenegro height={height} width={width} color={color} size={size} fill={fill} />)
        case 'montserrat':
          return (<Montserrat height={height} width={width} color={color} size={size} fill={fill} />)
        case 'morocco':
          return (<Morocco height={height} width={width} color={color} size={size} fill={fill} />)
        case 'mozambique':
          return (<Mozambique height={height} width={width} color={color} size={size} fill={fill} />)
        case 'myanmar':
          return (<Myanmar height={height} width={width} color={color} size={size} fill={fill} />)
        case 'namibia':
          return (<Namibia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'nauru':
          return (<Nauru height={height} width={width} color={color} size={size} fill={fill} />)
        case 'nepal':
          return (<Nepal height={height} width={width} color={color} size={size} fill={fill} />)
        case 'netherlands':
          return (<Netherlands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'new-caledonia':
          return (<NewCaledonia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'new-zealand':
          return (<NewZealand height={height} width={width} color={color} size={size} fill={fill} />)
        case 'nicaragua':
          return (<Nicaragua height={height} width={width} color={color} size={size} fill={fill} />)
        case 'niger':
          return (<Niger height={height} width={width} color={color} size={size} fill={fill} />)
        case 'nigeria':
          return (<Nigeria height={height} width={width} color={color} size={size} fill={fill} />)
        case 'niue':
          return (<Niue height={height} width={width} color={color} size={size} fill={fill} />)
        case 'northern-marianas-islands':
          return (<NorthernMarianasIsland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'north-korea':
          return (<NorthKorea height={height} width={width} color={color} size={size} fill={fill} />)
        case 'norway':
          return (<Norway height={height} width={width} color={color} size={size} fill={fill} />)
        case 'oman':
          return (<Oman height={height} width={width} color={color} size={size} fill={fill} />)

        case 'pakistan':
          return (<Pakistan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'palau':
          return (<Palau height={height} width={width} color={color} size={size} fill={fill} />)
        case 'palestine':
          return (<Palestine height={height} width={width} color={color} size={size} fill={fill} />)
        case 'panama':
          return (<Panama height={height} width={width} color={color} size={size} fill={fill} />)
        case 'papua-new-guinea':
          return (<PapuaNewGuinea height={height} width={width} color={color} size={size} fill={fill} />)
        case 'paraguay':
          return (<Paraguay height={height} width={width} color={color} size={size} fill={fill} />)
        case 'peru':
          return (<Peru height={height} width={width} color={color} size={size} fill={fill} />)
        case 'philippines':
          return (<Philippines height={height} width={width} color={color} size={size} fill={fill} />)
        case 'pitcairn-islands':
          return (<PitcairnIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'poland':
          return (<Poland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'portugal':
          return (<Portugal height={height} width={width} color={color} size={size} fill={fill} />)
        case 'puerto-rico':
          return (<PuertoRico height={height} width={width} color={color} size={size} fill={fill} />)
        case 'qatar':
          return (<Qatar height={height} width={width} color={color} size={size} fill={fill} />)
        case 'republic-of-the-congo':
          return (<RepublicOfTheCongo height={height} width={width} color={color} size={size} fill={fill} />)
        case 'reunion':
          return (<Reunion height={height} width={width} color={color} size={size} fill={fill} />)
        case 'romania':
          return (<Romania height={height} width={width} color={color} size={size} fill={fill} />)
        case 'russia':
          return (<Russia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'rwanda':
          return (<Rwanda height={height} width={width} color={color} size={size} fill={fill} />)

        case 'saint-kitts-and-nevis':
          return (<SainKittsAndNevis height={height} width={width} color={color} size={size} fill={fill} />)
        case 'saint-lucia':
          return (<SaintLucia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'saint-pierre-and-miquelon':
          return (<SaintPierreAndMiquelon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'saint-vincent-and-the-grenadines':
          return (<SaintVincentAndGrenadines height={height} width={width} color={color} size={size} fill={fill} />)
        case 'samoa':
          return (<Samoa height={height} width={width} color={color} size={size} fill={fill} />)
        case 'san-marino':
          return (<SanMarino height={height} width={width} color={color} size={size} fill={fill} />)
        case 'sao-tome-and-principe':
          return (<SaoTomeAndPrincipe height={height} width={width} color={color} size={size} fill={fill} />)
        case 'saudi-arabia':
          return (<SaudiArabia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'senegal':
          return (<Senegal height={height} width={width} color={color} size={size} fill={fill} />)
        case 'serbia':
          return (<Serbia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'seychelles':
          return (<Seychelles height={height} width={width} color={color} size={size} fill={fill} />)
        case 'sierra-leone':
          return (<SierraLeone height={height} width={width} color={color} size={size} fill={fill} />)
        case 'singapore':
          return (<Singapore height={height} width={width} color={color} size={size} fill={fill} />)
        case 'sint-maarten':
          return (<SintMaarten height={height} width={width} color={color} size={size} fill={fill} />)
        case 'slovakia':
          return (<Slovakia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'slovenia':
          return (<Slovenia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'solomon-islands':
          return (<SolomonIslands height={height} width={width} color={color} size={size} fill={fill} />)
        case 'somalia':
          return (<Somalia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'south-africa':
          return (<SouthAfrica height={height} width={width} color={color} size={size} fill={fill} />)
        case 'south-korea':
          return (<SouthKorea height={height} width={width} color={color} size={size} fill={fill} />)
        case 'south-sudan':
          return (<SouthSudan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'spain':
          return (<Spain height={height} width={width} color={color} size={size} fill={fill} />)
        case 'sri-lanka':
          return (<SriLanka height={height} width={width} color={color} size={size} fill={fill} />)
        case 'sudan':
          return (<Sudan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'suriname':
          return (<Suriname height={height} width={width} color={color} size={size} fill={fill} />)
        case 'swaziland':
          return (<Swaziland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'sweden':
          return (<Sweden height={height} width={width} color={color} size={size} fill={fill} />)
        case 'switzerland':
          return (<Switzerland height={height} width={width} color={color} size={size} fill={fill} />)
        case 'syria':
          return (<Syria height={height} width={width} color={color} size={size} fill={fill} />)

        case 'taiwan':
          return (<Taiwan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'tajikistan':
          return (<Tajikistan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'tanzania':
          return (<Tanzania height={height} width={width} color={color} size={size} fill={fill} />)
        case 'thailand':
          return (<Thailand height={height} width={width} color={color} size={size} fill={fill} />)
        case 'togo':
          return (<Togo height={height} width={width} color={color} size={size} fill={fill} />)
        case 'tokelau':
          return (<Tokelau height={height} width={width} color={color} size={size} fill={fill} />)
        case 'tonga':
          return (<Tonga height={height} width={width} color={color} size={size} fill={fill} />)
        case 'trinidad-and-tobago':
          return (<TrinidadAndTobago height={height} width={width} color={color} size={size} fill={fill} />)
        case 'tuvalu':
          return (<Tuvalu height={height} width={width} color={color} size={size} fill={fill} />)
        case 'tunisia':
          return (<Tunisia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'turkey':
          return (<Turkey height={height} width={width} color={color} size={size} fill={fill} />)
        case 'turkmenistan':
          return (<Turkmenistan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'turks-and-caicos':
          return (<TurksAndCaicos height={height} width={width} color={color} size={size} fill={fill} />)
        case 'uganda':
          return (<Uganda height={height} width={width} color={color} size={size} fill={fill} />)
        case 'ukraine':
          return (<Ukraine height={height} width={width} color={color} size={size} fill={fill} />)
        case 'united-arab-emirates':
          return (<UnitedArabEmirates height={height} width={width} color={color} size={size} fill={fill} />)
        case 'united-kindom':
          return (<UnitedKingdon height={height} width={width} color={color} size={size} fill={fill} />)
        case 'united-states-of-america':
          return (<UnitesStatesOfAmerica height={height} width={width} color={color} size={size} fill={fill} />)
        case 'uruguay':
          return (<Uruguay height={height} width={width} color={color} size={size} fill={fill} />)
        case 'uzbekistan':
          return (<Uzbekistan height={height} width={width} color={color} size={size} fill={fill} />)
        case 'vanautu':
          return (<Vanautu height={height} width={width} color={color} size={size} fill={fill} />)
        case 'vatican-city':
          return (<VaticanCity height={height} width={width} color={color} size={size} fill={fill} />)
        case 'venezuela':
          return (<Venezuela height={height} width={width} color={color} size={size} fill={fill} />)
        case 'vietnam':
          return (<Vietnam height={height} width={width} color={color} size={size} fill={fill} />)
        case 'wallis-and-futuna':
          return (<WallisAndFutuna height={height} width={width} color={color} size={size} fill={fill} />)
        case 'western-sahara':
          return (<WesternSahara height={height} width={width} color={color} size={size} fill={fill} />)
        case 'yemen':
          return (<Yemen height={height} width={width} color={color} size={size} fill={fill} />)
        case 'zambia':
          return (<Zambia height={height} width={width} color={color} size={size} fill={fill} />)
        case 'zimbabwe':
          return (<Zimbabwe height={height} width={width} color={color} size={size} fill={fill} />)
        default:
          return (<Blur height={height} width={width} color={color} size={size} fill={fill} />)
      }
    }
}
