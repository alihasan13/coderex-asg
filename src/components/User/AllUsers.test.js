import { render,screen } from '@testing-library/react';
import AllUsers from './AllUsers';

test("if the components rendered",()=>{
     render(<AllUsers/>);
     const title= screen.getByTitle("All Users")
     expect(title).toBeInTheDocument();
})