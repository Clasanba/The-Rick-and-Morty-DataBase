import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<i className="fa-brands fa-pagelines icons-footer"></i>
		<a href="https://www.linkedin.com/in/clasanba-full-stack-developer/" target="_blank" className="text-decoration-none text-footer">
		 <p> Made by Clasanba</p>
		</a>
		<i className="fa-brands fa-pagelines icons-footer"></i>
	</footer>
);
