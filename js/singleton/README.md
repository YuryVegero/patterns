https://www.patterns.dev/posts/singleton-pattern/

Singletons are classes which can be instantiated once, and can be accessed globally. 
This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

**Use case**
The common usecase for a Singleton is to have some sort of global state throughout your application. Although global state is not a good practice, 
we can at least make sure that the global state is mutated the way we intend it, since components cannot update the state directly.

**(Dis)advantages**
Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.
In many programming languages, such as Java or C++, it's not possible to directly create objects the way we can in JavaScript.
However, the class implementation shown in the example is actually overkill. Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result. 
