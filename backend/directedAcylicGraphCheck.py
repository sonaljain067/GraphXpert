from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def is_dag(self):
        visited = set()
        recursion_stack = set()

        def dfs(node):
            if node in recursion_stack:
                return True
            if node in visited:
                return False

            visited.add(node)
            recursion_stack.add(node)

            for neighbor in self.graph[node]:
                if dfs(neighbor):
                    return True

            recursion_stack.remove(node)
            return False

        for node in list(self.graph):
            if node not in visited:
                if dfs(node):
                    return False

        return True