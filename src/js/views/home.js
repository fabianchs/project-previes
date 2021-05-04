import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle, Badge } from "reactstrap";

export const Home = () => (
	<div className="text-center m-5">
		<h1>Hello Rigo!</h1>
		<div className="row">
			<div className="m-0 col-xl-4 col-lg-6 col-md-6 col-sm-12">
				<div className="m-0 row d-flex justify-content-end">
					<div className="row m-0 p-0 ps-4 ">
						<Button className="bg-dark border-dark border-rounded-top m-0 p-0 d-flex align-items-end">
							<Badge color="dark" pill>
								Modificar
							</Badge>
						</Button>
						<Button className="bg-danger border-danger border-rounded-top m-0 me-2 p-0 d-flex align-items-end">
							<Badge color="danger" pill>
								X
							</Badge>
						</Button>
					</div>
				</div>
				<div className="shadow-lg">
					<div
						className="bg-image p-4 text-center shadow-1-strong rounded rounded-5 mb-5 text-white "
						style={{
							backgroundImage: `url("https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248")`
						}}>
						<div className="row">
							<h1 id="texto-borde" className="col-12">
								Quercus rotundifolia
							</h1>
						</div>
						<div className="row d-flex justify-content-start">
							<div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 shadow m-0 p-0">
								<ListGroupItem className="justify-content-between bg-transparent">
									<div className="m-1 ">
										<Label check>
											<Input type="checkbox" id="task-text" /> Tarea de prueba
										</Label>
									</div>
								</ListGroupItem>
								<ListGroupItem className="justify-content-between bg-transparent">
									<div className="m-1 ">
										<Label check>
											<Input type="checkbox" className="ps-2" /> Tarea de prueba
										</Label>
									</div>
								</ListGroupItem>
								<ListGroupItem className="justify-content-between bg-transparent">
									<div className="m-1 ">
										<Label check>
											<Input type="checkbox" className="ps-2" /> Tarea de prueba
										</Label>
									</div>
								</ListGroupItem>
								<ListGroupItem className="justify-content-between bg-transparent">
									<div className="m-1 ">
										<Label check>
											<Input type="checkbox" className="ps-2" /> Tarea de prueba
										</Label>
									</div>
								</ListGroupItem>
								<ListGroupItem className="justify-content-between bg-transparent">
									<div className="m-1 ">
										<Label check>
											<Input type="checkbox" className="ps-2" /> Tarea de prueba
										</Label>
									</div>
								</ListGroupItem>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div id="container1">
				<img
					src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
					alt="Norway"
					id="back-image"
				/>
				<div id="text-1" className="border rounded-4 ">
					<h4>Nature</h4>
					<div id="tasks">
						<ListGroupItem className="justify-content-between">
							<div className="m-1">
								<Input type="checkbox" className="ps-2 text-dark" /> Tarea de prueba
							</div>
						</ListGroupItem>

						<ListGroupItem className="justify-content-between">
							<div className="m-1">
								<Label check>
									<Input type="checkbox" className="ps-2" /> Tarea de prueba
								</Label>
							</div>
						</ListGroupItem>

						<ListGroupItem className="justify-content-between">
							<div className="m-1">
								<Label check>
									<Input type="checkbox" className="ps-2" /> Tarea de prueba
								</Label>
							</div>
						</ListGroupItem>
					</div>
				</div>
			</div>
		</div> */}
			{/* <div>
			<div className="col-md-2">
				<div className="card card-coin card-plain">
					<div className="card-header">
						<img
							src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
							className="rounded-circle img-center img-fluid "
							//style={{ width: "20rem", height: "20rem" }}
						/>
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-md-12 text-center">
								<h4 className="text-uppercase">Bright Coin</h4>
								<span>Plan</span>
								<hr className="line-info" />
							</div>
						</div>
						<div className="row">
							<ul className="list-group">
								<li className="list-group-item">350 messages</li>
								<li className="list-group-item">10K emails</li>
								<li className="list-group-item">24/7 Support</li>
							</ul>
						</div>
					</div>
					<div className="card-footer text-center">
						<button className="btn btn-info btn-simple">Get plan</button>
					</div>
				</div>
			</div>
		</div>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div>
			<div className="col-6">
				<div className="row d-flex justify-content-center mb-2">
					<h1>Previsualización</h1>
				</div>
				<div className="row">
					<div className="col-6">
						<CardImg
							top
							width="100%"
							src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
							alt="Card image cap"
						/>
						<div className="box">
							<h2>
								Nombre de la planta
								<p id="plant_title">Planta de prueba</p>
							</h2>
							<h3>Lista de Tareas</h3>
						</div>
					</div>
					<div className="col-6">
						<div className="m-1">
							<ListGroupItem className="justify-content-between">
								<div className="m-1">
									<Label check>
										<Input type="checkbox" className="ps-2" /> Tarea de prueba
									</Label>
								</div>
							</ListGroupItem>

							<ListGroupItem className="justify-content-between">
								<div className="m-1">
									<Label check>
										<Input type="checkbox" className="ps-2" /> Tarea de prueba
									</Label>
								</div>
							</ListGroupItem>

							<ListGroupItem className="justify-content-between">
								<div className="m-1">
									<Label check>
										<Input type="checkbox" className="ps-2" /> Tarea de prueba
									</Label>
								</div>
							</ListGroupItem>
						</div>
					</div>
				</div>
			</div>*/}
		</div>
	</div>
);
