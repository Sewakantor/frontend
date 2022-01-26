import Link from "next/link"
import BuildingDetailOnReview from "../../components/BuildingDetailOnReview"
import CardReview from "../../components/CardReview"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

export async function getServerSideProps(context) {

	const id = context.params.id

	const [infoRes, reviewRes] = await Promise.all([
		fetch(`http://13.229.240.1:8080/property/building/${id}`), 
		fetch(`http://13.229.240.1:8080/property/building/review/${id}?is_approve=true`)
	]);
	const [info, review] = await Promise.all([
		infoRes.json(), 
		reviewRes.json()
	]);
	return { props: { info, review } };
}

export default function index({info, review}) {
	const infoData = info.data
	const reviewData = review.data
	const reviewStatus = review.status

	return (
		<>
			<Navbar/>
			<div className="container mx-auto px-4 lg:px-2">
				<h1 className="pt-5 pb-5 text-2xl font-bold">Review Kantor</h1>
				<BuildingDetailOnReview data={infoData}/>
				<h1 className="pt-5 pb-5 text-2xl font-bold">User Review</h1>
					{reviewStatus ? (
							<div>
								<h1 className="underline text-lg font-bold pb-10 pt-10">{reviewData?.length} Reviews</h1>
								{reviewData?.map((data) => (
									<CardReview 
										review={data}
									/>
								))}
							</div>
					) : (
							<h1 className="text-center text-lg font-bold pb-10 pt-10">Sorry No Review for this building.</h1>
					)}
				<Footer/>
			</div>
		</>
	)
}
