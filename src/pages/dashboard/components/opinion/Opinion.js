import React from "react";
import "./Opinion.scss";

const Opinion = () => {
	return (
		<>
			<div class="card tamaño-targeta text-center mt-5 centrar">
				<div class="card-body">
					<form>
						<div class="form-group">
							<label for="titulo-opinion">¿Deseas opinar algo?</label>
							<input
								class="form-control input-titulo"
								type="text"
								placeholder="Título de la opinión
							"
							></input>
						</div>

						<div class="md-form mt-4">
							<textarea
								id="form19"
								class="md-textarea form-control mb-3 text-area text-center"
								rows="6"
								placeholder="¡Tu opinión es muy importante para nosotros, por favor redacta una!"
							></textarea>
						</div>
						<button type="submit" class="btn btn-primary">
							Send Opinion
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Opinion;
