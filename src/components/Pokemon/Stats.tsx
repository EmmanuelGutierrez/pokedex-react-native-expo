import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { pokemonStat } from "../../interfaces/pokemonInterface";
import { capitalize } from "lodash";

interface StatsPropsI {
  stats: pokemonStat[];
}

const barStyles = (num: number) => ({
  backgroundColor: num > 49 ? "#3c3a" : "#ff3e3e",
  width: `${num}%`,
});

export const Stats = ({ stats }: StatsPropsI) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((stat) => (
        <View key={stat.stat.name} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{stat.base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={{ ...styles.bar, ...barStyles(stat.base_stat) }}
              ></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: { flexDirection: "row", paddingVertical: 5 },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
