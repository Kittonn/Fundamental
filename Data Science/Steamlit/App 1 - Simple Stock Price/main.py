import yfinance as yf
import streamlit as st
import pandas as pd

st.write("""
         # Simple Stock Price App
         
         Shown are the stock **closing price** and **Volume** of Google!
         """)

tickerSymbol = "GOOGL"
tickerdata = yf.Ticker(tickerSymbol)

tickerDf = tickerdata.history(period="1d", start="2010-5-31", end="2022-4-30")

st.write("""
         ## Closing Price
         """)
st.line_chart(tickerDf.Close)
st.write("""
         ## VolumeSimple Stock Price Price
         """)
st.line_chart(tickerDf.Volume)
