import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import accionImagen from "../../assets/images/accionImagen.png";
import flecha from "../../assets/images/flechita.png";
import equis from "../../assets/images/equis.png";

const CardAction = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      {expanded ? (
        <View style={styles.contenedorExp}>
          <TouchableOpacity
            style={styles.equisDiv}
            onPress={() => {
              setExpanded(false);
            }}
          >
            <Image style={styles.flechita} source={equis} />
          </TouchableOpacity>
          <View style={styles.textoContExp}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.descripcionExp}>{item.descripcion}</Text>
            <Text style={styles.recompensas}>
              {" "}
              {item.recompensa} pts de recompensa{" "}
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.guardar}>Guardar tarea</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.completar}>Completar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setExpanded(true);
          }}
          style={styles.contenedor}
        >
          <Image style={styles.imagen} source={accionImagen} />
          <View style={styles.textoCont}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.descripcion}>
              {item.descripcion.slice(0, 60)}...
            </Text>
          </View>
          <Image style={styles.flechita} source={flecha} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    width: "100%",
    maxHeight: 93,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 20,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignItems: "center",
    borderRadius: 5,
  },
  contenedorExp: {
    width: "100vw",
    paddingVertical: 18,
    paddingHorizontal: 19,
    backgroundColor: "white",
    flexDirection: "col",
    marginBottom: 20,
    borderRadius: 5,
    gap: 10,
  },
  imagen: {
    width: 93,
    height: 93,
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  flechita: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  textoCont: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "column",
    gap: 7,
    width: 300,
    height: "100vh",
  },
  title: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#378C55",
    width: "100%",
    textAlign: "left",
  },
  descripcion: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    width: "100%",
    paddingRight: 30,
    maxHeight: 93,
  },
  descripcionExp: {
    width: "100%",
    textAlign: "left",
    marginBottom: 20,
  },
  textoContExp: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    width: "80vw",
    height: "100%",
    alignItems: "center",
    gap: 10,
  },
  recompensas: {
    color: "#3391A6",
    fontSize: 14,
  },
  guardar: {
    padding: 10,
    backgroundColor: "white",
    borderColor: "#30618C",
    color: "#30618C",
    borderWidth: 1,
    borderRadius: 4,
    width: "40%",
    alignSelf: "center",
    textAlign: "center",
  },
  completar: {
    backgroundColor: "#3B8C75",
    paddingHorizontal: 32,
    paddingVertical: 16,
    color: "white",
    fontSize: 18,
    fontWeight: "semibold",
    borderRadius: 4,
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
  },
  equisDiv: {
    width: "100%",
    alignItems: "flex-end",
  },
});

export default CardAction;
