---
layout: page
title: Materials, Music, and Quantum Mechanics
excerpt: "Parallels between materials science, music, and quantum mechanics"
categories: articles
modified: 2016-09-17
comments: true
share: true
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.js'></script>


$$f(\vec{x}) = \sum_{\vec{n}\in\infty}\delta(\vec{x} - \vec{x}_{\vec{n}})$$

$$\vec{x}_{\vec{n}} = n_{1}\vec{a}_{1} + n_{2}\vec{a}_{2} + \ldots + n_{N}\vec{a}_{N}$$

$$
\vec{a}_{1} =[a_{11}, a_{12}, {a}_{13}] \cdot \vec{e}\\
\vec{a}_{2} =[a_{21}, a_{22}, {a}_{23}] \cdot \vec{e}\\
\vec{a}_{3} =[a_{31}, a_{32}, {a}_{33}] \cdot \vec{e}
$$

$$
\vec{a}_{1} =[1, 0, 0]\\
\vec{a}_{2} =[0, 1, 0]\\
\vec{a}_{3} =[0, 0, 1]
$$

$$\begin{vmatrix} \text{det A} \end{vmatrix} = \text{V in } \mathbb{R}^{3} $$

$$
\text{A} = 
    \begin{bmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33} 
    \end{bmatrix}
$$

$$
\phi : V \xrightarrow[map]{} F
$$

$$
B = {v_{1}, v_{2}, \cdots, v_{n}} \xrightarrow[map]{} B^{*} \text{ is its dual basis}
$$

$$
v = a_{1}v_{1} + a_{2}v_{2} + \cdots + a_{N}v_{N} \text{ where } v\in V \text{ and } a_{i}\in F
$$

$$
\phi(v) = a_{1}\phi(v_{1}) + a_{2}\phi(v_{2}) + \cdots + a_{N}\phi(v_{N}) \in F \text{ and } \phi\in V^{*}
$$

$$
B^{*} = {v_{1}^{*}, \dots, v_{N}^{*}}
$$

$$
dim(B) = dim(B^{*})
$$

$$
  B_{i} \cdot B_{j}^{*} = \delta_{ij} \begin{cases}
    1, & \text{if $i = j$}.\\
    0, & \text{if $i \neq j$}.
  \end{cases}
$$

$$
v_{1}^{*}(v_{1}) = 1\\
v_{1}^{*}(v_{2}) = 0\\
v_{1}^{*}(v_{3}) = 0
$$

$$
\langle f \rvert g \rangle = \int_{a}^{b} f(x)g(x)dx
$$

$$
f(x) = \sum_{n=-\infty}^{\infty} \delta(x - na)
$$

$$
f(x) = \sum_{n=-\infty}^{\infty} c_{n} e^{i2\pi n \frac{x}{a}}
$$

$$
c_{n} = \frac{1}{T} \int_{t=0}^{T} x(t) e^{i2\pi \frac{t}{a}} dt
$$

$$
c_{n} = \frac{1}{|a|} \int_{-\frac{a}{2}}^{\frac{a}{2}} f(x) e^{i2\pi n \frac{x}{a}} dx
$$

$$
c_{n} = \frac{1}{|a|} \int_{-\frac{a}{2}}^{\frac{a}{2}} \sum_{-\infty}^{\infty} \delta(x - na) e^{i2\pi n \frac{x}{a}} dx
$$

$$
c_{n} = \frac{1}{|a|} \int_{-\frac{a}{2}}^{\frac{a}{2}} \delta(x) e^{i2\pi n \frac{x}{a}} dx = \frac{1}{|a|}
$$

$$
f(x) = \sum_{n=-\infty}^{\infty} \frac{1}{|a|} e^{i2\pi n \frac{x}{a}}
$$


$$
F(k) = \int_{-\infty}^{\infty} f(x) e^{-i2\pi kx} dx
$$


$$
\mathscr{F}(f(x)) = \frac{1}{|a|} \int_{-\infty}^{\infty} \sum_{n=-\infty}^{\infty} e^{i2\pi n\frac{x}{a}}  e^{-i2\pi kx} dx
= \frac{1}{|a|} \sum_{n=-\infty}^{\infty} \int_{-\infty}^{\infty} e^{i2\pi n\frac{x}{a}}  e^{-i2\pi kx} dx
= \frac{1}{|a|} \sum_{n=-\infty}^{\infty} \delta(k - \frac{n}{a})
$$



$$
u(x) = \langle x \rvert \psi \rangle\\
w(p) = \langle p \rvert \psi \rangle
$$

$$
\hat{p} = -i\hbar\frac{\partial}{\partial x}
$$

$$
\langle p \rvert \psi \rangle \rightarrow \langle x \rvert \psi \rangle
$$

$$
\langle p \rvert \psi \rangle = \int \langle p \rvert x \rangle \langle x \rvert \psi \rangle dx
$$

$$
\langle p \rvert x \rangle = \frac{1}{\sqrt{2\pi\hbar}} \int e^{\frac{-ipx}{\hbar}} dx
$$

#Conclusion
