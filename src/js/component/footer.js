import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<i class="fa-brands fa-pagelines icons-footer"></i>
		<Link to="https://www.linkedin.com/in/clasanba-full-stack-developer/" className="text-decoration-none text-footer">
		 <p> Made by Clasanba</p>
		 </Link>
		 <i class="fa-brands fa-pagelines icons-footer"></i>
	</footer>
);
