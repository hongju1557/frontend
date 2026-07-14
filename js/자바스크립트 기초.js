//알림창
// alert("알림창 - 메세지 띄우기")

const movieTitle = "스텔라 오디세이";
const movieGenre = "SF 액션"
const movieRating = 9.2;

if (movieRating >=9.0) {
    console.log ("명작")
} else if (movieRating >= 7.0) {
    console.log ("평작")
}
else { console.log ("비추")}

const ratingBadge = movieRating ? `🏓 $(movieRating)`:"";
