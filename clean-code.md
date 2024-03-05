<!-- Solid Principle -->

1. Single Responsibility Principle
- A class should have one and only one reason to change, meaning that a class should have only one job.

2. Open-closed Principle
- Objects or entities should be open for extension but closed for modification.
- Should write new class extends old class

3. Liskov Substitution Principle
- If it looks like a duck and quacks like a duck but needs batteries, you probably have the wrong abstraction

4. Interface Segregation Principle
- Instead of create a large interface, seperate to smaller interface

5. Dependency inversion principle
- The principle tells you that high-level modules should not depend on low-level modules, both should depend on abstractions.
- Make a interface for high-level modules 

<!-- Clean code -->
- Keep it simple
- Make meaningful names:
    + Function: start with verb
    + Variable: start with noun
- Make arguments clearly
- Don't modify original data
- High-level functions should be on top and lower-level below

<!-- Front end -->
- Modify data at API level, not in component
- Use seperate file to store and handle init value
- Use ModalContainer to store Modal
 
