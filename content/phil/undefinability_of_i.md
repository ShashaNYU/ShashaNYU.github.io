---
date: 2025-11-11
---
#metaphysics #explanation 
This question was raised in Tim Maudlin's lecture discussing naming and necessity. Tim was arguing that referring to something (especially pointing to something), say pointing to a book and claiming that it is blablabla, is purely an *anaphoric* chain and nothing causal was involved. Then one gave an instance that the imaginary unit $i$ is not definable, but you can point to it on the complex plane (I guess that was what he was trying to say), which was refuted by Tim. 

I found the problem intriguing, though I didn't understand what they were talking about in the lecture.
Additionally, GPT said Tim was wrong because pointing to something is *deictic*, not *anaphoric*. 

Here is basically what Tim was saying (in an informal way and some technically wrong because he was mixing the notion of field and ring).

Consider the set of natural numbers $\mathbb{N}:\{0,1,2,\dots\}$. We know its structure, that there is a special unit $0$ which does not have a predecessor, so its successors can be recursively referred to. 
For a slightly more complicated set $\mathbb Z:\{\dots,-2,-1,0,1,2,\dots\}$. There is no such special unit in the above sense. However, consider the operation $+$ and $\times$ are defined so we can refer to $0$ as the special unit in the binary operation $0+x = x$ and $0\times x = x$ (in a very informal way). Nevertheless, Tim claimed that due to the symmetry of the two operations, we cannot distinguish between the negative numbers and the positive numbers. I was distracted here because I was thinking that, since natural numbers are a semiring, why can't we distinguish them in this way? (actually a more formal way is to define $1$ as the unique multiplicative identity)

### The Problem
Now consider the imaginary unit $i$, and we know that it was defined as:
$$
i = \sqrt{-1}\qquad\text{or}\qquad i^{2} = -1
$$
The intuition is that, it is indiscernible between $i$ and $-i$ since $(-i)^{2}= -1$ as well. You might say we can draw it on the complex plane, but simply mirroring the plane (or change the direction of the axis) does no harm. That is to say, given two *distinct* mathematical objects (that is weird I don't know why we must regard them as distinct ones), though we refer to them in the name of $i$ and $-i$, we do not intrinsically know which object is truly (this word is problematic though) the $i$.

### Undefinability in Model Theory
In model theory, a structure $M$ (like $\mathbb C$) interprates a formal language $L$ (like the language of fields). 
A subset $S\subseteq M^n$ is called **definable** if there is a formula $\varphi(x_1,\dots,x_n)$ in $L$ such that:
$$
S = \{ (a_1,\dots,a_n) \in M^n : M \models \varphi(a_1,\dots,a_n)\}.
$$
An element $a\in M$ is **definable** if there is a formula $\varphi(x)$ with **exactly one** solution in $M$, i.e has unique item preserving the formula true. 
For our case, we need a first-order formula $\varphi(x)$ such that:
$$
\mathbb{C} \models \varphi(i) \quad \text{and} \quad \text{for all } a \in \mathbb{C}, \mathbb{C} \models \varphi(a) \rightarrow a = i.
$$
This can be proved by an *automorphism*, and below is an informal proof. 

>[!note] Definition of automorphism (informal)
A *homomorphism* between two $L$-structures $M$ and $N$ is a map $h$ : $|M| \to |N|$ that respects the structure:
$$h(f^M(a_1,\dots,a_n)) = f^N(h(a_1),\dots,h(a_n))$$
and for every relation symbol $R$,
$$(a_1,\dots,a_n)\in R^M \implies (h(a_1),\dots,h(a_n))\in R^N,$$
and constants are preserved: $h(c^M)=c^N.$
If the map $h$ is bijective and its inverse is also a *homomorphism*, it’s an *isomorphism*.
If it’s an *isomorphism* from a structure onto itself, it’s an ***automorphism***.

An important corollary is that, an automorphism preserves all the truths. For instance, for the field $\mathbb C$, any automorphism, say $\sigma$, preserves the field operation:
$$\sigma(z+w) = \sigma(z) + \sigma(w), \qquad \sigma(z \cdot w) = \sigma(z) \cdot \sigma(w),$$
and of course
$$\sigma(0)=0, \quad \sigma(1)=1.$$
>[!note] Fact
> If $a$ is **definable** (without parameters), then every **automorphism** of $M$ fixes $a$

This fact is obvious from the above corollary, which suggests that
$$
M \models \varphi(a) \implies M \models \varphi(f(a)),
$$
and by uniqueness $f(a) = a$.

>[!note] Proposition
>The imaginary unit $i$ is not definable in $\mathbb C$.

>[!tip] Proof
> Consider the automorphism $\sigma(a+bi) = a-bi$, i.e. conjugation. The automorphism fixes only the real numbers. If $i$ were definable in the language of field, then $\sigma(i) = i$, but according to the definition $\sigma(i) = -i \neq i$, contradicted. 
> 
> So $i$ is not definable.$\qquad\square$

### Views (mostly given by GPT)
#### Structuralism
A **mathematical structuralist** would say that those two have no identity beyond their role in the structure. What is real is the pattern of relations, one is one's negative. Under this view, the *name* $i$
merely picks a position in the structure after we have made a conventional choice of orientation. 

#### Model-theoretic
The field of complex numbers determined up to isomorphism. Any two algebraically closed fields of characteristic $0$ containing $\mathbb{R}$ are isomorphic, but not canonically—you can map i to either $i$ or $-i$. So the “referent” of $i$ is fixed only within a chosen isomorphism, never absolutely. That is a case of **referential indeterminacy**, for the theory cannot distinguish between the two possibilities because they satisfy the same properties. 

#### Others
- determined by use
- no ontological entity

### Thoughts
Several interesting questions can be raised.
First, how does this logical consequence coincide with our mathematical intuitions?
Second, the indiscernibility lies merely on a field theory level, or does it affect mathematical applications?
Third, most importantly, how can we refer to $i$, or in what language (circumstances) can we do so?

The first two are quite mathematical. I cannot give a satisfying answer due to my limited knowledge. 
My intuition is that the conjugation matters to the applications, but not the indiscernibility. 
One thing we need to notice is that the indiscernibility between $i$ and $-i$ doesn't mean that we can use the two interchangeably. They still need to follow the original mathematical rules. We can stipulate them (under more structures), though we cannot tell them in the field theory. 

For instance (the simplest), we can stipulate that the direction of $i$ is $\frac{\pi}{2}$ counter-clockwise. More precisely (though still informal):
In vector space $\mathbb R^2$, consider operator $J$:
$$
J^2=-I,\qquad J\text{ is }g\text{-orthogonal},\qquad g(u,Jv)=\omega(u,v).
$$
define the multiplication on $\mathbb R^2$ by
$$
(a,b)\odot (c,d)\;:=\;(ac-bd,\;ad+bc).
$$
then we define:
$$
1:=(1,0),\qquad i:=(0,1),\qquad i^2=(0,1)\odot(0,1)=(-1,0).
$$
Now we showed that $\mathbb R^2$ is isomorphic to $\mathbb C$. In $\mathbb R^2$, 
$$
e^{xJ} \;=\; I + xJ + \frac{x^2J^2}{2!} + \frac{x^3J^3}{3!}+\cdots = \big(\cos x\big)I + \big(\sin x\big)J,
$$
If we choose $-J$, the $\sin$ term flipped over, that is an analogue of the $i\leftrightarrow -i$ symmetry. 

Thus, we can refer to $i$ in a much more complicated way in an extra structure. <u>So, does this mean we can refer to $i$ since there is an isomorphism? </u>Technically no (I think), since there is not only one isomorphism (like rotating $\frac{\pi}{2}$ clockwise), we still cannot fix the reference unless do the above procedure (fix the $J$). **NEED MORE EXPLICATION**. 
Furthermore it suggests that $i$ does not have a definite description in almost any sense, even if we can point at the point on the whiteboard and say the point 1 unit above the origin is $i$. Now, can the isomorphism $\mathbb R^{2}\mapsto\mathbb C$ be a *baptism* in Kripke's sense? Historically speaking, yes, since when we are talking about $i$, we all know what we are talking and will not confound it with $-i$. In this sense, the *causal chain* of $i$ is determined though not explicate (by which I mean a really rigorous definition in algebra courses, but the sense of $i$ is on the top is baptized). After baptism, the name is a **rigid designator**. Consider in another possible world people use $-i$ in the place we use $i$, but it is merely the change of names, since our designator uniquely determined how it should be used. 

Now look back to Tim's question. If we point to $i$ on the whiteboard, of course we cannot refer to it (in the field theory), unless its use (baptism) is determined (in an extra structure).
