---
sidebar_position: 1
---

# Queue API

### General Overview

```lua
local Queue = require(game.ReplicatedStorage.Queue) -- Requiring Module
local TestQueue = Queue.new() -- Creating a new Queue

local function HelloWorld() -- Example Function
    print('Hello World')
end

TestQueue:Enqueue(HelloWorld, 2) -- prints Hello World with a 2 second wait after execution

```

<hr/>

## General Settings

## Events

### General Calling

An event that gets fired upon a Cue being called

```lua
local TestQueue = Queue.new()

TestQueue.Calling:Connect(function()
	print('A cue has been called')
end)
```

### Specific Calling

An event that gets fired upon a given Cue being called

```lua
TestQueue:Enqueue(function() end, 2):Connect(function()
    print("I've been called!")
end)
```
