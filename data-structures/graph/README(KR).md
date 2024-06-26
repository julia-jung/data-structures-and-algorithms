### Undirected Graph

: 방향이 없는 그래프

### Directed Graph

: 방향이 있는 그래프

### Topological Sort

: 순서가 정해져 있는 일련의 작업을 차례대로 수행해야 할 때 사용할수 있는 알고리즘

- ‘사이클이 없는 방향 그래프의 모든 노드를 방향성에 거스르지 않도록 순서대로 나열 하는 것’
  - 진입차수(Indegree): 특정노드로 들어오는 간서의 개수
  - 진출차수(Outdegree): 특정 노드에서 나가는 간선의 개수
- 정렬방법
  1. 진입차수가 0인 노드를 큐에 넣고
  2. 큐가 빌 때까지 다음 반복
  - 큐에서 원소를 꺼내어 해당 노드에서 나가는 간선을 그래프에서 제거
  - 새롭게 진입차수가 0이 된 노드를 큐에 삽입
  3. 노드가 큐에 들어온 순서가 위상정렬 결과가 된다.
