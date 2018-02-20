# iFrame-Memory-Leak-Detector

Detects cross frame references that prevent iFrames from being garbage collected

[Demo](samkirkland.com/labs/iFrame-Memory-Leak-Detector/index.html)

## Screen shots:
![Screen shot of console output](https://raw.githubusercontent.com/SamKirkland/iFrame-Memory-Leak-Detector/master/output.png)

## Usage:

1. Click "Reload the page, leak more memory" to refresh the inner iFrame
2. Notice the increase in memory usage, this is because the inner iFrames are still referenced
3. Click "run iFrame memory leak detector"
4. View dev tools console to see output

## Limitations
Only events/variables on the immediate window are checked, this means any objects within objects could still have pointers to frames