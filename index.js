const express = require('express')
const app = express()


app.use((req,res,next)=>{
  console.log("Middleware Main")
  console.log(req.method + "/" + req.url)
  next()
})


let lowBudget = {
    lowBudgetGPUs: [
      {
        name: "AMD Radeon RX 6600",
        "description": "A solid choice for 1080p gaming, offering good performance at an affordable price point.",
        "imageURL": "https://tse1.mm.bing.net/th?id=OIP.5n7XQOX7vvdbQ7d58xL57QHaEs&pid=Api",
        
      },
      {
        "name": "Nvidia GeForce RTX 3060",
        "description": "Suitable for 1080p and 1440p gaming, providing a balance between performance and cost.",
        "imageURL": "https://tse2.mm.bing.net/th?id=OIP.sa0CoLa-MIJsn7HeyqPMZQHaGf&pid=Api",
        
      },
      {
        "name": "AMD Radeon RX 5700 XT",
        "description": "Offers excellent value for its performance, especially when purchased used.",
        "imageURL": "https://tse3.mm.bing.net/th?id=OIP.CS67QV7XZ7fgRh7c6hmeDQHaHa&pid=Api",
        
      },
      {
        "name": "Nvidia GeForce GTX 1660 Super",
        "description": "An entry-level GPU suitable for machine learning tasks and gaming, known for its cost-effectiveness.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIP.QjUYV28rq0WedV_IoePFzAHaFO&pid=Api",
        
      },
      {
        "name": "AMD Radeon RX 580",
        "description": "A budget-friendly option for gaming, offering decent performance for its price.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIP.I4ZtDsaw7V4ijFuUGX_GQgAAAA&pid=Api",
        
      }
    ]
  }
           
 let midBudget = {
           "midRangeGPUs": [
      {
        "name": "AMD Radeon RX 7800 XT",
        "description": "A powerful mid-range GPU ideal for 1440p gaming, delivering high frame rates and advanced features at a competitive price point.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIP.my3LQaew4Xr6AiQe6qxVyQHaEK&pid=Api",
        
      },
      {
        "name": "Nvidia GeForce RTX 4070 Super",
        "description": "An excellent choice for gamers seeking high performance in 1440p and 4K gaming, offering advanced ray tracing and DLSS capabilities.",
        "imageURL": "https://tse3.mm.bing.net/th?id=OIP.hkmGnYLmA_5G9pJwfP7IkwHaFj&pid=Api",
        
      },
      {
        "name": "AMD Radeon RX 7700 XT",
        "description": "A cost-effective option for 1440p gaming, providing solid performance and value for mid-range budgets.",
        "imageURL": "https://tse3.mm.bing.net/th?id=OIP.tK_ni04WMi-dPEPJQaMW8gHaEK&pid=Api",
        
      },
      {
        "name": "Nvidia GeForce RTX 4060 Ti",
        "description": "Suitable for 1080p and entry-level 1440p gaming, offering a balance between performance and affordability.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIP.MAoiF2IvQrRdD7bHdm5_qgHaEK&pid=Api",
        
      },
      {
        "name": "Intel Arc B580",
        "description": "Intel's latest mid-range GPU, providing competitive performance in 1080p and 1440p gaming at an attractive price point.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIF.M6gMMXUjz8rlWfxSc6JYmQ&pid=Api",
        
      }
    ]
  }

  let highBudget = {
    "highRangeGPUs": [
      {
        "name": "Nvidia GeForce RTX 5090",
        "description": "Nvidia's upcoming flagship GPU, the RTX 5090, is expected to feature 32GB of GDDR7 memory, 21,760 CUDA cores, and nearly 1.8TB/s of memory bandwidth, making it a powerhouse for 4K gaming and intensive computational tasks.",
        "imageURL": "https://tse3.mm.bing.net/th?id=OIP.Pk4RZvb4-gusvqpT3H_WQgHaEK&pid=Api",
        
      },
      {
        "name": "AMD Radeon RX 9070 XT",
        "description": "Part of AMD's next-gen lineup, the RX 9070 XT is built on the RDNA 4 architecture and includes AI-powered FidelityFX Super Resolution 4 (FSR 4) upscaling technology, aiming to deliver exceptional performance in high-resolution gaming.",
        "imageURL": "https://tse1.mm.bing.net/th?id=OIP.bE0dzU3vhUd0mHx7sQmlYQHaEI&pid=Api",
        
      },
      {
        "name": "Nvidia GeForce RTX 4090",
        "description": "Currently one of the most powerful GPUs available, the RTX 4090 offers exceptional performance for 4K gaming and professional workloads, featuring advanced ray tracing and AI capabilities.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIP.rPLuur5bAS4-KVsvtrDgmAHaGn&pid=Api",
       
      },
      {
        "name": "AMD Radeon RX 7900 XTX",
        "description": "AMD's high-end GPU, the RX 7900 XTX, delivers impressive performance for gaming and content creation, with a focus on efficiency and advanced features.",
        "imageURL": "https://tse3.mm.bing.net/th?id=OIP.bOVaAcv6CQH4CWz-OAQlSQHaD7&pid=Api",
        
      },
      {
        "name": "Nvidia GeForce RTX 5080",
        "description": "As part of Nvidia's upcoming 50-series, the RTX 5080 is anticipated to offer significant performance improvements over its predecessors, targeting high-end gaming and professional applications.",
        "imageURL": "https://tse4.mm.bing.net/th?id=OIF.SCoLM2nXJbu9jlyi%2bXQQOQ&pid=Api",
        
      }
    ]
  }

  app.get("/", (req, res) => {
    res.send("<h1>Welcome to Budget GPU picker (GO TO /docs FOR MORE INFO)</h1>")
  })

  app.get("/docs", (req, res) => {
    res.send("<h1>Please Go To One Of These Endpoints For Your Product (/lowBudget , /midBudget , /highBudget) and remeber to remove the /docs before adding one of the endpoints</h1>")
  })

  app.get("/lowBudget", (req, res) => {
    res.json(lowBudget)
    res.send("<h1>THANK YOU FOR CHOOSING GPU PART PICKER</h1>")
  })

  app.get("/midBudget", (req, res) => {
    res.json(midBudget)
    res.send("<h1>THANK YOU FOR CHOOSING GPU PART PICKER</h1>")
  })

  app.get("/highBudget", (req, res) => {
    res.json(highBudget)
    res.send("<h1>THANK YOU FOR CHOOSING GPU PART PICKER</h1>")
  })

  app.use((req,res,next)=>{
    res.status(404).send("ERROR! NOT FOUND")
  })
  

  app.listen(3000, () => {
    console.log("Server running")
})