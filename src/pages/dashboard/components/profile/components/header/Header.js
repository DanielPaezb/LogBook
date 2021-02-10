import React from "react";
import "./Header.scss";
import "./tarjetas.scss";
import { Link } from "react-router-dom";

const Header = ({
	nombre,
	rol,
	estado,
	apellido,
	jornada,
	edad,
	correo,
	rh,
	institucion,
	programa,
    etapa,
    practicas,
}) => {
	return (
		<>
			<div class="img">
                <a href="#"><span className='fas fa-edit white-color'></span></a>
            </div>
			<div class="card social-prof">
				<div class="card-body card-size">
					<div class="wrapper">
						<img 
							src="https://bootdey.com/img/Content/avatar/avatar2.png"
							alt=""
							class="user-profile"
						/>
                        <a href="#"><span className='fas fa-edit'></span></a>
                        <h3>{nombre} {apellido}</h3>
					</div>
					<div class="row">
						<div class="col-lg-6 mt-3">
							<div class="card">
								<div class="card-body info-card social-about">
									<h2 class="text-primary">
									  {institucion}
									</h2>
									<h4>
										Jornada:
										<span className="p-1 mb-1 bg-primary text-white rounded">
											{jornada}
										</span>
									</h4>
									<h4>Edad: {edad}</h4>
									<h4>Correo: {correo}</h4>
									<h4>RH: {rh}</h4>
								</div>
							</div>
						</div>

						<div class="col-lg-6 mt-3">
							<div class="card color-tarjetas">
								<div class="card-body info-card social-about">
									<h2 class="text-primary">
										{rol}
									</h2>
									<h4>
										Estado:{" "}
										<span className="p-1 mb-1 bg-success text-white rounded">
											{estado}
										</span>
									</h4>
									<h4>Edad: {edad}</h4>
									<h4>Etapa: {etapa}</h4>
									<h4>Prácticas: {practicas}</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
