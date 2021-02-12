import React from "react";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row comentarios justify-content-center ">
					<div className="col-6">
						<form
							action=""
							className="form-comentarios d-flex justify-content-end flex-wrap"
						>
							<textarea name="" id="" placeholder="Deja tu post"></textarea>
							<button className="btn btn-primary btn-shadow" type="submit">
								Postear
							</button>
						</form>
						<div className="media">
							<img
								src="https://i.ibb.co/nnGQ9tJ/face1.png"
								width="64"
								height="64"
								alt=""
							/>
							<div className="media-body">
								<p className="nombre">
									Daniel Páez<span>16:08 pm, Hoy</span>
								</p>
								<p className="comentario">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Beatae quod non libero! Lorem, ipsum dolor sit amet
									consectetur adipisicing elit. Beatae quod non libero! Lorem,
									ipsum dolor sit amet consectetur adipisicing elit. Beatae quod
									non libero! Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Beatae quod non libero!
								</p>
								<div className="botones text-right">
								    <i class="far fa-heart"></i>
									<i class="far fa-comment"></i>
									<i class="far fa-trash-alt"></i>
									<i class="fas fa-share"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
