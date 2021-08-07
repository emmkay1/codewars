public class TenMinuteWalk {
  public static boolean isValid(char[] walk) {
    int x = 0;
    int y = 0;
    for(int i = 0; i < walk.length; i++){
      switch(walk[i]){
        case 'n': y++; break;
        case 's': y--; break;
        case 'e': x++; break;
        case 'w': x--; break;
      }
    }
    return walk.length == 10 && x == 0 && y == 0;
  }
}