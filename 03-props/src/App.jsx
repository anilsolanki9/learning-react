import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="allCards min-h-screen bg-zinc-900 p-5">
      <Card
        img="https://images.unsplash.com/photo-1775133117908-99043faa40b0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        user="Anil S"
        age={21}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quod tempore labore! Voluptate exercitationem aspernatur ab, repudiandae quod tempora? Iste?"
      />

      <Card
        img="https://images.unsplash.com/photo-1774444487684-a796af0c2841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
        user="Suresh G"
        age={20}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quod tempore labore! Voluptate exercitationem aspernatur ab, repudiandae quod tempora? Iste?"
      />

      <Card
        img="https://images.unsplash.com/photo-1774258161371-d5ad244af3d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
        user="Manish R"
        age={31}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quod tempore labore! Voluptate exercitationem aspernatur ab, repudiandae quod tempora? Iste?"
      />
    </div>
  );
};

export default App;
