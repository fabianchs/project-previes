import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle } from "reactstrap";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
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
							className="img-overlay"
							width="100%"
							src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
							alt="Card image cap">
							holaaa
						</CardImg>
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
			</div>
		</div>
	</div>
);
