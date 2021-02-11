import React from "react";
import "./Opinion.scss";

const Opinion = () => {
	return (
		<>
			<div class="card tamaño-targeta text-center offset-3 mt-5">
				<div class="card-header">Opiniones</div>
				<div class="card-body">
					<form>
						<div class="form-group">
							<label for="exampleInputEmail1 mt-3">
								¿Deseas opinar algo Daniel?
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Email Sena"
							/>
							<small id="emailHelp" class="form-text text-muted">
								No compartiremos su contraseña con terceros.
							</small>
						</div>

						<div class="md-form">
							<textarea
								id="form19"
								class="md-textarea form-control mb-3"
							></textarea>
						</div>
						<button type="submit" class="btn btn-primary">
							Send Opinion
						</button>
					</form>
					<div class="ec-stars-wrapper">
						<a href="#" data-value="1" title="Votar con 1 estrellas">
							&#9733;
						</a>
						<a href="#" data-value="2" title="Votar con 2 estrellas">
							&#9733;
						</a>
						<a href="#" data-value="3" title="Votar con 3 estrellas">
							&#9733;
						</a>
						<a href="#" data-value="4" title="Votar con 4 estrellas">
							&#9733;
						</a>
						<a href="#" data-value="5" title="Votar con 5 estrellas">
							&#9733;
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Opinion;
