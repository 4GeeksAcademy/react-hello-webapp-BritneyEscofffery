import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react"

export const Home = () => {
	const [user, setUser] = useState("Britney")
	const {store, dispatch} =useGlobalReducer()
	
	const createAgenda = () => {
		let options = {
			method: "POST",
			headers: {"content-type":"application/JSON"},
			body: JSON.stringify({
				"slug": "britneyescoffery",
            	"id": 18
			})
		}
	fetch(store.baseUrl + "/agendas/britneyescoffery", options)
			.then((resp) => resp.json())
			.then((data) => {
				setUser(data.detail)
				console.log("createagenda:", data)
			})
		}
	
	const createContacts = () => {
		const options = {
			method: "POST",
			headers: {"content-type":"application/JSON"},
			body: JSON.stringify({
				"name": "user3",
            	"phone": "phone3",
           	 	"email": "email3",
            	"address": "address3"
			})
		}
		fetch(store.baseURL + "/agendas/britneyescoffery/contacts", options)
			.then((resp) => resp.json())
			.then((data) => console.log("contact data:", data))
		}
	
	
	useEffect(
		() => {
			createAgenda()
		},[]
	)
	
	return (
		<div className="text-center mt-5">
			<h1>Hello World!!</h1>
			{user}
			<Link to = "/test">
			Go To Test Page
			</Link>
			<button className="btn btn-danger" onClick={() => 
				createContacts()
			}>
				Click to add contact
			</button>

			<button className="btn btn-danger" onClick={()=>{
				dispatch({
					type: "set-fname",
					payload: "Brittany"
				})
			}}>{store.fname}</button>
			<button className="btn btn-primary" onClick={()=>{
				dispatch({
					type:"set-lname",
					payload: "Spears"
				})
			}}>{store.lname}</button>
		</div>
	);
}; 