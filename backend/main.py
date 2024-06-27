from fastapi import FastAPI
from cors import setup_cors
from directedAcylicGraphCheck import Graph 
from pydantic import BaseModel 

app = FastAPI()
setup_cors(app) 
graph = Graph() 

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class nodeEdges(BaseModel):
    nodes: object 
    edges: object 

@app.post('/pipelines/parse')
def parse_pipeline(data: nodeEdges): 
    try: 
        data_dict = data.dict() 
        nodes = data_dict['nodes']
        edges = data_dict['edges']
       
        nodeIds = [node['id'] for node in nodes]
        edgeConn = [(edge['source'], edge['target']) for edge in edges]

        for source, target in edgeConn: 
            graph.add_edge(source, target) 
        return {
            "num_nodes": len(nodes),
            "num_edges": len(edges), 
            "is_dag": graph.is_dag()
        }

    except Exception as e: 
        print(e) 

    
