import { getRandomImageUrlForMen, getRandomImageUrlForWomen, login_url, participant } from "./commonlib.js";
import * as math from './mathutil.js'


const rand_number_for_image = math.randomNumber();
const randomurl = getRandomImageUrlForMen(rand_number_for_image);
console.log('randomurl::' + randomurl);


const randomurl_women_dp = getRandomImageUrlForWomen(rand_number_for_image);
console.log('randomurl_women_dp::' + randomurl_women_dp);

console.log('login_url::' + login_url);

let newParticipant = new participant('Venkatesh', 'LWC')
newParticipant.showParticipantDetail();

console.log(math.difference(5,4));

console.log('Add function output is ' + math.add(10));


console.log('Rest Paramter::' +  math.summall(1,2)) // OP : 3
console.log('Rest Paramter::' + math.summall(1,3,4)) // Op: 8
console.log('Rest Paramter::' + math.summall(1,3,6,10)) // OP:20
console.log('Rest Paramter::' + math.summall(1,3,6,10,10,10)) // OP:40



